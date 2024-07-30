import React, { useState } from "react";
import Swal from "sweetalert2";

const Modal = ({ closeModal, title }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    cuerpo: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/ejercicio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      console.log("Response data:", data);

      // Muestra la alerta de éxito
      Swal.fire({
        icon: "success",
        title: "Creado correctamente",
        text: "El ejercicio se ha creado con éxito.",
        confirmButtonColor: "#4CAF50",
      });

      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);

      // Muestra la alerta de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al crear el ejercicio.",
        confirmButtonColor: "#f44336",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="relative mx-auto max-w-lg p-5 bg-white rounded-xl shadow-2xl">
        <h1 className="text-2xl font-semibold text-center mb-5">{title}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="titulo" className="block mb-2">
              Añade un título
            </label>
            <input
              type="text"
              id="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="cuerpo" className="block mb-2">
              Parte del Cuerpo
            </label>
            <select
              id="cuerpo"
              value={formData.cuerpo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            >
              <option value="">Selecciona una parte</option>
              <option value="brazo">Brazo</option>
              <option value="pierna">Pierna</option>
              <option value="espalda">Espalda</option>
              <option value="pecho">Pecho</option>
              <option value="hombro">Hombro</option>
              <option value="pantorrilla">Pantorrilla</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="descripcion" className="block mb-2">
              Añade una descripción
            </label>
            <input
              type="text"
              id="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-200"
          >
            Aceptar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
