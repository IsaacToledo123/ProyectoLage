import React from "react";
import SemanaCalendario from "./calendariosCoach";
import CalendarioTabla from "./calendarioCliente";
import Nav from "./nav";
import Objetivos from "./objetivosMain";
const menuPrincipal = () => {
  const eventos = [
    { nombre: "Pierna", fecha: "2024-05-27" },
    { nombre: "Brazo", fecha: "2024-05-26" },
    { nombre: "Abdomen", fecha: "2024-05-22" },
  ];
  return (
    <div>

      <div className="text-center font-semibold m-10">
        <h1 className="text-5xl">NUTRIFIT </h1>
        <p>Nutricion y bienestar</p>
      </div>
      <CalendarioTabla eventos={eventos} />
      <div>
        <Objetivos></Objetivos>
      </div>
    </div>
  );
};

export default menuPrincipal;
