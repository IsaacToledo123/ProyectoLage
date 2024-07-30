import React, { useState } from "react";
import Chat from "./administrador/chatProto";

const Consultoria = () => {
  const [selectedConsultoria, setSelectedConsultoria] = useState(null);

  const handleConsultoriaClick = (consultoria) => {
    setSelectedConsultoria(consultoria);
  };

  const getBoxStyle = (consultoria) => {
    if (selectedConsultoria === consultoria) {
      return "bg-white text-black";
    }
    return "bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:from-blue-900 hover:to-blue-900";
  };

  return (
    <div>
      <h1 className="text-5xl font-semibold text-center m-10">CONSULTORIAS</h1>
      <div className="flex space-x-10 m-20">
        <div
          className={`content-center w-1/2 h-screen rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer ${getBoxStyle("INSTRUCTOR")}`}
          onClick={() => handleConsultoriaClick("INSTRUCTOR")}
        >
          <div className="flex m-10">
            {selectedConsultoria === "INSTRUCTOR" ? (
              <Chat />
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <p className={`text-5xl font-semibold ${selectedConsultoria === "INSTRUCTOR" ? "text-black" : "text-white"}`}>INSTRUCTOR</p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`content-center w-1/2 h-screen rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer ${getBoxStyle("NUTRIOLOGO")}`}
          onClick={() => handleConsultoriaClick("NUTRIOLOGO")}
        >
          <div className="flex m-10">
            {selectedConsultoria === "NUTRIOLOGO" ? (
              <Chat />
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <p className={`text-5xl font-semibold ${selectedConsultoria === "NUTRIOLOGO" ? "text-black" : "text-white"}`}>NUTRIOLOGO</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
