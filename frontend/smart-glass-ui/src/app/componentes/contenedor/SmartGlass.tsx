import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../../../index.css"; // Asegúrate de importar el CSS si no está global


export const SmartGlass: React.FC = () => {
    const [transparencia, setTransparencia] = useState<number>(5);

    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valor = parseInt(e.target.value);
        if (valor < 5) valor = 5;
        if (valor > 80) valor = 80;
        setTransparencia(valor);
    };

    return (
        <div className="smartglass-bg flex flex-col items-center min-h-screen">
            <div className="smartglass-card text-center">
                <h3 className="smartglass-title">Bienvenido a Smart Glass</h3>
                <img
                    src="/src/assets/img/vidrio.png"
                    alt="Vidrio Inteligente"
                    className="smartglass-img mx-auto object-contain"
                    style={{
                        width: "300px",
                        opacity: 0.16 + (transparencia / 100) * 0.9,
                        transition: "opacity 0.3s ease",
                    }}
                />
                <label htmlFor="pepa" className="smartglass-label">
                Aumentar la intensidad de la luz:
                </label>

                <div className="smartglass-input-group">
                <input
                    type="number"
                    min="5"
                    max="80"
                    value={transparencia}
                    onChange={manejarCambio}
                    className="smartglass-input"
                    placeholder="Ingrese %"
                />
                <span className="smartglass-label">%</span>
                </div>

                <input
                    id="pepa"
                    type="range"
                    min="5"
                    max="80"
                    step="1"
                    value={transparencia}
                    onChange={manejarCambio}
                    className="smartglass-slider"
                />
                <div className="smartglass-minmax">
                    Mínimo: 5% &nbsp;|&nbsp; Máximo: 80%
                </div>
            </div>

            <section className="smartglass-section">
                <h1>Explora Smart Glass</h1>
                <p>
                    Descubre cómo Smart Glass está transformando la forma en que interactuamos con la luz.
                    Nuestro sistema combina tecnología avanzada con facilidad de uso, ofreciendo soluciones
                    prácticas para edificios inteligentes, vehículos y dispositivos electrónicos.
                </p>
                <div className="smartglass-buttons">
                    <NavLink to="/transparencia" className="btn btn-primary">
                        Ver Transparencia en Acción
                    </NavLink>
                    <NavLink to="/modelo" className="btn btn-secondary">
                        Explorar el Modelo Matemático
                    </NavLink>
                </div>
            </section>

        </div>
    );
};