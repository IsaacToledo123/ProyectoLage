import React, { useState, useEffect } from 'react';

const Semana = ({ titulo, closeModal }) => {
  const [formData, setFormData] = useState({
    lunes: '',
    rutina1: '',
    martes: '',
    rutina2: '',
    miercoles: '',
    rutina3: '',
    jueves: '',
    rutina4: '',
    viernes: '',
    rutina5: '',
    sabado: 'Descanso',
    domingo: 'Descanso'
  });
  
  const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/rutina');
        if (!response.ok) {
          throw new Error('Error fetching rutinas');
        }
        const data = await response.json();
        setRutinas(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchRutinas();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/semana', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error submitting semana');
      }
      const data = await response.json();
      console.log('Response:', data);
      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto'>
      {/* Fondo difuminado */}
      <div className='fixed inset-0 bg-black opacity-50'></div>

      {/* Contenido del modal */}
      <div className='relative mx-auto max-w-lg p-5 bg-white rounded-xl shadow-2xl'>
        <h1 className='text-2xl font-semibold text-center mb-5'>{titulo}</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <div className='grid grid-cols-2 gap-4 mb-4 w-full'>
            {['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map((dia, index) => (
              <React.Fragment key={index}>
                <label htmlFor={dia}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</label>
                <select
                  id={dia}
                  value={formData[dia]}
                  onChange={handleInputChange}
                  className='rounded-lg border'
                >
                  <option value=''>Selecciona una rutina</option>
                  {rutinas.map((rutina) => (
                    <option key={rutina.titulo} value={rutina.titulo}>
                      {rutina.titulo}
                    </option>
                  ))}
                </select>
              </React.Fragment>
            ))}
          </div>

          <button type='submit' className='w-full py-3 mt-6 bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-200'>
            Aceptar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Semana;
