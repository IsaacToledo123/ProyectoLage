import React from "react";

const ObjetivosMain = () => {
  const objetivos = [
    { titulo: "Perder Peso", icono: "🏋️‍♀️" },
    { titulo: "Ganar Músculo", icono: "💪" },
    { titulo: "Vida Sana", icono: "🥗" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center font-bold text-4xl mb-12 text-gray-800">
        OBJETIVOS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {objetivos.map((objetivo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1">
              <div className="bg-white p-6 rounded-t-xl">
                <div className="text-5xl mb-4">{objetivo.icono}</div>
                <h2 className="font-semibold text-xl text-gray-800">
                  {objetivo.titulo}
                </h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Descripción breve del objetivo y cómo alcanzarlo.
              </p>
              <button className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition duration-300">
                Más Información
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjetivosMain;