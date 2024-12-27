import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createCalendar,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css"; // Este es el CSS por defecto
import "./schedule-x.css"; // Importa los estilos personalizados

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { is } from "date-fns/locale";

// Función para separar los eventos por día
const separarPorDia = (eventos: any[]) => {
  const eventosPorDia: { [key: string]: any[] } = {};

  eventos.forEach((evento) => {
    const startDate = new Date(evento.start);
    const endDate = new Date(evento.end);
    const fecha = startDate.toISOString().split("T")[0]; // Extraemos solo la fecha (YYYY-MM-DD)

    if (!eventosPorDia[fecha]) {
      eventosPorDia[fecha] = [];
    }

    eventosPorDia[fecha].push({
      start: startDate,
      end: endDate,
      title: evento.title,
    });
  });

  return eventosPorDia;
};

// Función para verificar si dos eventos se superponen
const validarSuperposicion = (event1: any, event2: any) => {
  const start1 = dayjs(event1.start);
  const end1 = dayjs(event1.end);
  const start2 = dayjs(event2.start);
  const end2 = dayjs(event2.end);

  // Verifica si las fechas y horas se solapan
  return start1.isBefore(end2) && start2.isBefore(end1);
};

const CalendarApp: React.FC = () => {
  const eventModal = createEventModalPlugin();
  const eventDragAndDrop = createDragAndDropPlugin();

  const eventsService = useState(() => createEventsServicePlugin())[0];
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Coffee with John",
      start: "2024-12-28 10:05",
      end: "2024-12-28 10:35",
    },
    {
      id: 2,
      title: "Ski trip",
      start: "2024-12-27 02:30",
      end: "2024-12-27 03:20",
    },
    {
      id: 3,
      title: "Weekly Stand-up",
      start: "2024-12-26 09:00",
      end: "2024-12-26 10:00",
      recurrence: "RRULE:FREQ=WEEKLY;BYDAY=WE",
    },
  ]);

  const calendar = useCalendarApp({
    locale: "es-ES",
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events,
    plugins: [eventsService, eventModal, eventDragAndDrop],
    callbacks: {
      onRangeUpdate(range) {
        console.log("Nuevo rango de fechas: ", range.start, range.end);
      },
      onEventClick(calendarEvent) {
        console.log("Evento clickeado: ", calendarEvent);
      },
      onEventUpdate(updatedEvent) {
        console.log("Evento actualizado: ", updatedEvent);
      },
      onBeforeEventUpdate(oldEvent, newEvent, $app) {
        console.log("Evento antes de actualizar: ", oldEvent, newEvent, $app);
        // Obtener todos los eventos actuales
        const eventosActuales = eventsService.getAll();

        // Verificar superposición
        const haySuperposicion = eventosActuales.some(
          (eventoExistente) =>
            eventoExistente.id !== oldEvent.id &&
            validarSuperposicion(eventoExistente, newEvent)
        );

        if (haySuperposicion) {
          console.log(
            "Los eventos se superponen. No se realizará la actualización."
          );
          return false; // No permitir la actualización
        }

        // Si no hay superposición, actualizamos el evento
        console.log(
          "Cargando todos los eventos anteriores...",
          eventsService.getAll()
        );
        eventsService.update({ ...oldEvent, ...newEvent });
        console.log(
          "Cargando todos los eventos despues...",
          eventsService.getAll()
        );
        console.log("Evento actualizado exitosamente.");
        return true; // Permitir la actualización
      },
      onDoubleClickEvent(calendarEvent) {
        setIsOpen((isOpen) => !isOpen);
        console.log("onDoubleClickEvent", calendarEvent);
      },
    },
  });

  // Hook useEffect para separar los eventos por día cuando cambian los eventos o al inicio
  useEffect(() => {
    const eventosPorDia = separarPorDia(events);
    console.log("Eventos separados por día: ", eventosPorDia);
    // Puedes guardar eventosPorDia en el estado si es necesario
    // setEventosPorDia(eventosPorDia);
  }, [events]); // Dependencia de events, se ejecuta cuando los eventos cambian

  useEffect(() => {
    // Cargar todos los eventos al inicio
    eventsService.getAll();
  }, [eventsService]);

  return (
    <div className="max-h-[650px] overflow-y-scroll no-scrollbar border rounded-lg">
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cerrar
            </AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default CalendarApp;
