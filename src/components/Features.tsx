import React from "react";
import { Calendar, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agenda 24/7",
    description:
      "Agenda tus citas en cualquier momento, desde cualquier lugar.",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description:
      "Olvídate de las llamadas telefónicas y los correos electrónicos.",
  },
  {
    icon: Users,
    title: "Fácil de usar",
    description:
      "Interfaz intuitiva para una experiencia de usuario sin complicaciones.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nuestras características
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary dark:text-primary-foreground mb-4 text-gray-600 dark:text-gray-300" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
