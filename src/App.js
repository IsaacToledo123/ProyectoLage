import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Menu from './components/menuPrincipal';
import Nav from './components/nav';
import Objetivos from './components/objetivos';
import Consultoria from './components/consultoria';
import ClientChat from './components/clienteChat';
import Planes from './components/planes';
import Semana from './components/administrador/personalizarSemana';
import NuevoEjer from './components/administrador/nuevoEjer';
import MenuAdmin from './components/administrador/menuAdmin';
import Contacto from './components/Contacto';
import AccordionEjercicios from "./components/acordioEjercicios";
import CalendarioCoach from './components/calendariosCoach'
import Registro from './components/registro'
import Login from "./components/login";
import Pagos from "./components/pagos";
import CheckoutPage from "./components/checkout";
import LadingPage from './components/ladingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/lading' element={<LadingPage />} />


        <Route path='/pagos' element={<Pagos />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        <Route path='/User/*' element={<AdminRoutes />} />

        <Route path='/Admin' element={<MenuAdmin />} />
        <Route path='/AdminCalendar' element={<CalendarioCoach />} />
      
      </Routes>
    </BrowserRouter>
  );
}

const AdminRoutes = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/User')) {
    return (
      <>
        <Nav />
        <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/encasa' element={<AccordionEjercicios />} />
        <Route path='/planes' element={<Planes />} />
        <Route path='/chat' element={<Consultoria />} />
        <Route path='/casa' element={<Objetivos />} />
        <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </>
    );
  } else {
    return null; // En caso de que la ruta no sea de Admin, no renderizar nada
  }
};

export default App;
