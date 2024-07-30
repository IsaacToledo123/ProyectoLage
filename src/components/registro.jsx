import React, { useState } from "react";
import Logo from "../imgs/LogoNutrifit.png";
import axios from "axios";
import Swal from "sweetalert2";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    sexo: "",
    objetivos: "",
    plan: "",
    password: "", 
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/usuario", {
        nombre: formData.nombre,
        contraseña: formData.password, 
        email: formData.email,
        sexo: formData.sexo,
        objetivos: formData.objetivos,
        plan: formData.plan,
      });

      console.log("Registro exitoso:", response.data);
      await Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Ahora puedes iniciar sesión.",
      });

      // Redirigir a la página de inicio de sesión
      window.location.href = "/login";

    } catch (error) {
      console.error("Error en el registro:", error);

      // Mostrar alerta de error
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al registrar el usuario.",
      });
    }
  };

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-green-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <div className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              <p>Regístrate</p>
              <div className="flex justify-center items-center mt-3">
                <img src={Logo} className="w-1/3" alt="Logo Nutrifit" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10">
              <div>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombres"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                />
              </div>

              <div className="mt-7">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="sexo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sexo
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="objetivos"
                  className="block text-sm font-medium text-gray-700"
                >
                  Objetivos
                </label>
                <select
                  id="objetivos"
                  name="objetivos"
                  value={formData.objetivos}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                >
                  <option value="">Selecciona</option>
                  <option value="Perder peso">Perder peso</option>
                  <option value="Ganar masa muscular">Ganar masa muscular</option>
                  <option value="Mantenerse en forma">Mantenerse en forma</option>
                </select>
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                />
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Registrar
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">¿Ya tienes una cuenta?</label>
                  <a
                    href="/login"
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Iniciar sesión
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
