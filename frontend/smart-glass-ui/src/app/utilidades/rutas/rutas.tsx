import { Route, Routes } from "react-router-dom";

import { SmartGlass } from "../../componentes/contenedor/SmartGlass";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<SmartGlass />} />
      <Route path="/acerca" element={<Acerca />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};