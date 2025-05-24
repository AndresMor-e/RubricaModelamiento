import { NavLink } from "react-router-dom";

export const NoEncontrado = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
            <div>
                <i className="bi bi-emoji-frown display-1 text-danger"></i>
            </div>
            <h1 className="mt-3">404 - Página no encontrada</h1>
            <p className="lead text-secondary">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <NavLink to="/" className="btn btn-primary">
                Volver al Inicio
            </NavLink>
        </div>
    );
};