import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../../../index.css";

export const SmartGlass: React.FC = () => {
  const [lux, setLux] = useState<number>(150);
  const [inputValue, setInputValue] = useState<string>("150");

  const calcularTransparencia = (lux: number): number => {
    const minLux = 150;
    const maxLux = 1000;
    const minTransp = 5;
    const maxTransp = 80;
    const porcentaje = ((lux - minLux) / (maxLux - minLux)) * (maxTransp - minTransp) + minTransp;
    return Math.round(porcentaje);
  };

  const manejarCambioTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); 
  };

  const validarYActualizarLux = () => {
    let valor = parseInt(inputValue);
    if (isNaN(valor)) valor = 150;
    if (valor < 150) valor = 150;
    if (valor > 1000) valor = 1000;
    setLux(valor);
    setInputValue(valor.toString()); 
  };

  const manejarCambioSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value);
    setLux(valor);
    setInputValue(valor.toString());
  };

  const transparencia = calcularTransparencia(lux);

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

        <label htmlFor="lux-input" className="smartglass-label">
          Aumentar la intensidad de la luz:
        </label>

        <div className="smartglass-input-group">
          <input
            id="lux-input"
            type="number"
            value={inputValue}
            onChange={manejarCambioTexto}
            onBlur={validarYActualizarLux}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                validarYActualizarLux();
              }
            }}
            className="smartglass-input"
            placeholder="Ingrese lux"
          />
          <span className="smartglass-label">Lux.</span>
        </div>

        <div className="smartglass-slider-container">
          <input
            type="range"
            min="150"
            max="1000"
            step="1"
            value={lux}
            onChange={manejarCambioSlider}
            className="smartglass-slider"
          />
          <span className="smartglass-percent">{transparencia}%</span>
        </div>

        <div className="smartglass-minmax">
          Mínimo: 150 &nbsp;|&nbsp; Máximo: 1000
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
