import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gray-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Agenda tu cita en segundos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Simplifica tu vida con nuestro sistema de agendamiento en línea.
          Rápido, fácil y conveniente.
        </p>
        <Button asChild size="lg">
          <a href="#appointment">Agendar ahora</a>
        </Button>
      </div>
    </section>
  );
}
