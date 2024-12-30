import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import imgBanner from "../assets/schedule-banner.png";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="py-20 text-center bg-gray-50 dark:bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div
          ref={ref}
          className={`lg:w-1/2 text-center lg:text-left ${
            inView && "animate-fade-right duration-700 z-20"
          }`}
        >
          <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
            Administra tu agenda en segundos y{" "}
            <span className="vibrate-3-normal absolute animate-pulse ml-2 mt-2 text-yellow-400 dark:text-purple-500">
              Gratis!
            </span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Simplifica tu vida con nuestro sistema de agendamiento en línea.
            Rápido, fácil y conveniente para tu negocio.
          </p>
          <Button
            ref={ref2}
            className={`${
              inView2 && "animate-fade-down duration-700 animate-delay-700"
            }`}
            asChild
            size="lg"
          >
            <a
              href="#appointment"
              className="group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 dark:ring-neutral-700 flex items-center transition-all "
            >
              Comienza ahora
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 " />
            </a>
          </Button>
        </div>
        <div
          ref={ref3}
          className={`lg:w-1/2 mt-16 lg:mt-0 ${
            inView3 && "animate-fade-left duration-700 z-10"
          }`}
        >
          <img
            src={imgBanner}
            alt="Persona agendando una cita en línea"
            className="w-full"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
