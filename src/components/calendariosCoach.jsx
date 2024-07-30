import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const SemanaCalendario = () => {
  const [eventos, setEventos] = useState([]);

  // Fetch para obtener los datos de la semana
  const fetchSemana = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/semana');
      if (!response.ok) {
        throw new Error('Error fetching semana');
      }
      const data = await response.json();
      console.log('Semana data:', data);

      // Convertir los datos de la semana en eventos del calendario
      const eventosCalendario = [
        {
          title: data.lunes,
          start: new Date(), // Establece la fecha y hora apropiadas
          allDay: true
        },
        {
          title: data.martes,
          start: new Date(new Date().setDate(new Date().getDate() + 1)),
          allDay: true
        },
        {
          title: data.miercoles,
          start: new Date(new Date().setDate(new Date().getDate() + 2)),
          allDay: true
        },
        {
          title: data.jueves,
          start: new Date(new Date().setDate(new Date().getDate() + 3)),
          allDay: true
        },
        {
          title: data.viernes,
          start: new Date(new Date().setDate(new Date().getDate() + 4)),
          allDay: true
        },
        {
          title: data.sabado,
          start: new Date(new Date().setDate(new Date().getDate() + 5)),
          allDay: true
        },
        {
          title: data.domingo,
          start: new Date(new Date().setDate(new Date().getDate() + 6)),
          allDay: true
        }
      ];

      setEventos(eventosCalendario);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchSemana();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={eventos}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
    />
  );
};

export default SemanaCalendario;
