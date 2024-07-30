import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ModalRutina = ({ closeModal, title }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    ejercicio1: "",
    repeticiones1: "",
    ejercicio2: "",
    repeticiones2: "",
    ejercicio3: "",
    repeticiones3: "",
    ejercicio4: "",
    repeticiones4: "",
    ejercicio5: "",
    repeticiones5: "",
  });

  const [ejercicios, setEjercicios] = useState([]);

  // Fetch de ejercicios desde la API
  useEffect(() => {
    const fetchEjercicios = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/ejercicio");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEjercicios(data); // Suponiendo que 'data' es un array de ejercicios
      } catch (error) {
        console.error("Error fetching ejercicios:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudieron cargar los ejercicios.",
          confirmButtonColor: "#f44336",
        });
      }
    };

    fetchEjercicios();
  }, []);

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
      const response = await fetch("http://localhost:3000/api/rutina", {
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
        title: "Rutina creada correctamente",
        text: "La rutina se ha creado con éxito.",
        confirmButtonColor: "#4CAF50",
      });

      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);

      // Muestra la alerta de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al crear la rutina.",
        confirmButtonColor: "#f44336",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="relative mx-auto max-w-lg p-5 bg-white rounded-xl shadow-2xl">
        <h1 className="text-2xl font-semibold text-center mb-5">{title}</h1>
        <form onSubmit={handleSubmit} className="items-center grid grid-cols-6 gap-x-2 ">
          <div className="mb-4 w-full">
            <label htmlFor="titulo" className="block mb-2">
              Título de la Rutina
            </label>
            <input
              type="text"
              id="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              placeholder="Ingrese el título de la rutina"
            />
          </div>
       

          {[...Array(5)].map((_, i) => (
            <div key={i} className="mb-4 w-full">
              <label htmlFor={`ejercicio${i + 1}`} className="block mb-2">
                Ejercicio {i + 1}
              </label>
              <select
                id={`ejercicio${i + 1}`}
                value={formData[`ejercicio${i + 1}`]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="">Selecciona un ejercicio</option>
                {ejercicios.map((ejercicio) => (
                  <option key={ejercicio.id} value={ejercicio.nombre}>
                    {ejercicio.titulo}
                  </option>
                ))}
              </select>
              <label htmlFor={`repeticiones${i + 1}`} className="block mb-2 mt-2">
                Repeticiones {i + 1} 
              </label>
              <input
                type="text"
                id={`repeticiones${i + 1}`}
                value={formData[`repeticiones${i + 1}`]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Ingrese las repeticiones (e.g., 15x2)"
              />
            </div>
          ))}

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

export default ModalRutina;
