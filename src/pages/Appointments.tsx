import React from "react";
import SchedulerTable from "../components/schedules/bitnoiScheduler";
import CalendarApp from "../components/schedules/schedule-x";

const Appointments: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Mis Citas
        </h1>
      </div>
      <CalendarApp />
    </div>
  );
};

export default Appointments;
