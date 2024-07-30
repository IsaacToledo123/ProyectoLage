import { useState,useEffect } from "react";
import NuevoEjer from "./nuevoEjer";
import Semana from "./personalizarSemana";
import ModalRutina from "./rutina";
import axios from "axios";

const MenuAdmin = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const openModal1 = () => {
    setModal1Open(true);
  };

  const closeModal1 = () => {
    setModal1Open(false);
  };

  const openModal2 = () => {
    setModal2Open(true);
  };

  const closeModal2 = () => {
    setModal2Open(false);
  };

  const openModal3 = () => {
    setModal3Open(true);
  };

  const closeModal3 = () => {
    setModal3Open(false);
  };

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    
    const fetchClientes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/usuario");
        setClientes(response.data);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
    };

    // Llamar a la función para obtener los clientes al cargar el componente
    fetchClientes();
  }, []);

  return (
    <div>
      <div class="min-h-screen bg-gray-50/50">
        <div class="p-4 ">
          <nav class="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
            <div class="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
              <div class="capitalize">
                <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
                  home
                </h6>
              </div>
              <div class="flex items-center">
                <button
                  class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button"
                >
                  <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-blue-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
                <button
                  aria-expanded="false"
                  aria-haspopup="menu"
                  id=":r2:"
                  class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button"
                >
                  <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-blue-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </nav>
          <div class="mt-12">
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <a href="/AdminCalendar">
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                  <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="p-4 text-right">
                    <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                      Cuerpo
                    </p>
                    <br />
                  </div>
                  <div class="border-t border-blue-gray-50 p-4">
                    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                      <strong class="text-green-500">1</strong>&nbsp;Agrega
                      Parte del Cuerpo
                    </p>
                  </div>
                </div>
              </a>

              <div
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
                onClick={openModal1}
              >
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-6 h-6 text-white"
                  >
                    <path d="M21 10h-1.5V8.5A1.5 1.5 0 0018 7h-1V6a1 1 0 00-2 0v1h-6V6a1 1 0 00-2 0v1H6A1.5 1.5 0 004.5 8.5V10H3a1 1 0 100 2h1.5v1.5A1.5 1.5 0 006 15h1v1a1 1 0 002 0v-1h6v1a1 1 0 002 0v-1h1a1.5 1.5 0 001.5-1.5V12H21a1 1 0 000-2zm-2 4.5a.5.5 0 01-.5.5h-1v-6h1a.5.5 0 01.5.5v5zM5.5 8a.5.5 0 01.5-.5h1v6h-1a.5.5 0 01-.5-.5v-5z" />
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Ejercicio
                  </p>
                  <br />
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class="text-green-500">2</strong>&nbsp;Agrega
                    Ejercicio
                  </p>
                </div>
              </div>
              <div
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
                onClick={openModal3}
              >
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="w-6 h-6 text-white"
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Rutina
                  </p>
                  <br />
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class="text-red-500">3</strong>&nbsp;Crea Rutina
                  </p>
                </div>
              </div>
              <div
                class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
                onClick={openModal2}
              >
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-6 h-6 text-white"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    Calendario
                  </p>
                  <br />
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class="text-green-500">4</strong>&nbsp;Crea la
                    semana
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="mb-4 grid grid-cols-1 content-center">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                  <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                    <div>
                      <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                        Usuarios
                      </h6>
                    </div>
                    <button
                      aria-expanded="false"
                      aria-haspopup="menu"
                      id=":r5:"
                      className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                      type="button"
                    ></button>
                  </div>
                  <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                      <thead>
                        <tr>
                          <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                            <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                              Nombre
                            </p>
                          </th>
                          <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                            <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                              Email
                            </p>
                          </th>
                          <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                            <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                              Plan
                            </p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientes.map((cliente) => (
                          <tr key={cliente._id}>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                              <div className="flex items-center gap-4">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                                  {cliente.nombre}
                                </p>
                              </div>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                              <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                                {cliente.email}
                              </p>
                            </td>
                            <td className="py-3 px-5 border-b border-blue-gray-50">
                              <div className="w-10/12">
                                <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                                  {cliente.plan}
                                </p>
                                <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                  <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal1Open && (
        <NuevoEjer closeModal={closeModal1} title="Agrega Nuevo Ejercicio" />
      )}
      {modal2Open && (
        <Semana closeModal={closeModal2} title="Personaliza la Semana" />
      )}
      {modal3Open && <ModalRutina closeModal={closeModal3} title="Modal 3" />}{" "}
    </div>
  );
};

export default MenuAdmin;
