import { NavLink } from "react-router-dom";

export const Cabecera = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary border rounded"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white d-flex align-items-center" to="/">
                        <img
                            src="/src/assets/img/logo.png"
                            alt="Logo"
                            className="me-2"
                            style={{ width: "30px", height: "30px" }}
                        />
                        Smart Glass
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-link active-nav" : "nav-link"
                            }
                            >
                            Inicio
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                to="/acerca"
                                className={({ isActive }) => `nav-link ${isActive ? "active-nav" : ""}`}
                                >
                                Acerca de
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};