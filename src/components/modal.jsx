import React, { useState, useEffect } from "react";

const Modal = ({ evento, onClose }) => {
  const [rutinas, setRutinas] = useState({});
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rutina");
        if (!response.ok) {
          throw new Error("Error al obtener las rutinas");
        }
        const data = await response.json();
        
        const rutinaEncontrada = data.find((rutina) => rutina.titulo === evento);
        setRutinas(rutinaEncontrada);
        
        if (rutinaEncontrada) {
          obtenerEjercicios(rutinaEncontrada);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRutinas();
  }, [evento]);

  const obtenerEjercicios = async (rutina) => {
    try {
      const ejerciciosPromises = [];
      for (let i = 1; i <= 5; i++) {
        const response = await fetch(`http://localhost:3000/api/ejercicio/${rutina[`ejercicio${i}`]}`);
        if (!response.ok) {
          throw new Error(`Error al obtener el ejercicio ${i} de la rutina`);
        }
        const data = await response.json();
        ejerciciosPromises.push(data);
      }
      const ejerciciosData = await Promise.all(ejerciciosPromises);
      setEjercicios(ejerciciosData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style={{ background: "rgba(0,0,0,.7)" }}>
      <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="font-semibold">{evento}</p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="my-5">
            <ol>
              {ejercicios.map((ejercicio, index) => (
                <li key={index}>
                  <strong>{ejercicio.titulo}</strong>
                  <p>{rutinas[`repeticiones${index + 1}`]}</p>
                  <p>{ejercicio.descripcion}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex justify-end pt-2">
            <button className="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" onClick={onClose}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
