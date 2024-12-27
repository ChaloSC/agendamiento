import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function AppointmentForm() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <section id="appointment" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Agenda tu cita
        </h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Nombre completo"
            required
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            required
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Select>
            <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <SelectValue placeholder="Tipo de servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consulta">Consulta general</SelectItem>
              <SelectItem value="revision">Revisión</SelectItem>
              <SelectItem value="tratamiento">Tratamiento</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              />
            </PopoverContent>
          </Popover>
          <Button type="submit" className="w-full">
            Agendar cita
          </Button>
        </form>
      </div>
    </section>
  );
}
