import React, { useState } from "react";
import Logo from "../imgs/LogoNutrifit.png";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      const response = await axios.post("http://localhost:3000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login successful:", response.data);

      // Mostrar alerta de inicio de sesión exitoso
      await Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!",
        text: "Redirigiendo al menú principal.",
      });

    
      window.location.href = "/User/menu";

    } catch (error) {
      console.error("Error en el inicio de sesión:", error);

      // Mostrar alerta de error
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Credenciales inválidas. Por favor, inténtalo de nuevo.",
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
              <p>Iniciar Sesión</p>
              <div className="flex justify-center items-center mt-3">
                <img src={Logo} className="w-1/3" alt="Logo Nutrifit" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10">
              <div>
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
                  Iniciar Sesión
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">¿No tienes una cuenta?</label>
                  <a
                    href="/registro"
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Crear Cuenta
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

export default Login;
