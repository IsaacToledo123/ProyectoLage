import React from "react";
import Gluteos from "../imgs/gluteos.png";
import Brazo from "../imgs/brazo.png";
import Pecho from "../imgs/pecho.png";


const objetivos = () => {
  return (
    <div className="">
      <h1 className="text-center text-5xl m-20 font-semibold">Entrena desde casa</h1>
      <div className="space-y-10 flex flex-col items-center m-20">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 content-center w-2/4 h-1/4 rounded-2xl flex items-center justify-center shadow-2xl hover:w-4/6">
          <div className="flex m-10">
            <div className="w-1/2">
              <p className="text-white text-5xl font-semibold">
                Entrenamiento de Glúteos
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={Gluteos}
                alt="imagen"
                className="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-red-900 content-center w-2/4 h-1/4 rounded-2xl flex items-center justify-center shadow-2xl hover:w-4/6 ">
          <div className="flex m-10">
            <div className="w-1/2">
              <p className="text-white text-5xl font-semibold">
                Entrenamiento de Brazos
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={Brazo}
                alt="imagen"
                className="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600 to-green-900 content-center w-2/4 h-1/4 rounded-2xl flex items-center justify-center shadow-2xl hover:w-4/6  ">
          <div className="flex m-10">
            <div className="w-1/2">
              <p className="text-white text-5xl font-semibold">
                Entrenamiento de Pecho
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={Pecho}
                alt="imagen"
                className="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default objetivos;
