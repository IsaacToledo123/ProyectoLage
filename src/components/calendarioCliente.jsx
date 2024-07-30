import React, { useState, useEffect } from "react";
import Modal from "./modal";

const CalendarioTabla = () => {
  const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const [eventosSemanales, setEventosSemanales] = useState({});
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [diaActual, setDiaActual] = useState(new Date().getDay() - 1);

  useEffect(() => {
    const fetchSemanaCreada = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/semana");
        if (!response.ok) throw new Error("Error al obtener la semana creada");
        const data = await response.json();
        setEventosSemanales(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSemanaCreada();
  }, []);

  const abrirModal = (evento) => setEventoSeleccionado(evento);
  const cerrarModal = () => setEventoSeleccionado(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500">
          <h2 className="text-2xl font-bold text-white">Calendario Semanal</h2>
          <div className="text-white">{new Date().toLocaleDateString()}</div>
        </div>
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {diasDeLaSemana.map((dia, index) => (
            <div 
              key={dia} 
              className={`bg-white p-4 ${index === diaActual ? 'border-t-4 border-blue-500' : ''}`}
            >
              <h3 className="font-semibold text-gray-900 text-center">{dia}</h3>
              <div 
                className="mt-2 p-2 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                onClick={() => abrirModal(eventosSemanales[dia.toLowerCase()])}
              >
                <p className="text-sm text-gray-600">
                  {eventosSemanales[dia.toLowerCase()] || "Sin eventos"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {eventoSeleccionado && (
        <Modal evento={eventoSeleccionado} onClose={cerrarModal} />
      )}
    </div>
  );
};

export default CalendarioTabla;