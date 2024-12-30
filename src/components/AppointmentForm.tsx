import { Button } from "@/components/ui/button";
import { ArrowRight, Crown } from "lucide-react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    id: "01",
    title: "Regístrate",
    description: "Crea tu cuenta en menos de 2 minutos",
  },
  {
    id: "02",
    title: "Configura tu agenda",
    description: "Define tus horarios y servicios disponibles",
  },
  {
    id: "03",
    title: "Comparte tu link",
    description: "Envía tu link de agenda a tus clientes",
  },
  {
    id: "04",
    title: "Listo",
    description: "Deja que la magia suceda",
  },
];

const AppointmentForm = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`bg-gray-50 dark:bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 py-24 sm:py-32 ${
        inView && "animate-fade-down duration-700 "
      }`}
    >
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 text-center `}>
        <h2 className="text-lg font-semibold text-primary">Proceso Simple</h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl ">
          ¿Cómo funciona?
        </p>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Comienza a usar nuestro sistema de agendamiento en tres simples pasos
        </p>

        <dl className="mt-16 grid gap-16 mx-auto w-fit lg:grid-cols-4">
          {steps.map(({ id, title, description }) => (
            <div key={id} className="flex flex-col items-start lg:items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`relative h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-white dark:text-black ${
                    id === "04" && "bg-yellow-400 text-black"
                  }`}
                >
                  {id === "04" && (
                    <Crown className="absolute bottom-12 h-10 w-10 animate-bounce duration-800 ease-in-out text-yellow-500" />
                  )}
                  {id}
                </div>
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  {title}
                </span>
              </div>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <Button asChild size="lg">
            <a
              href="#appointment"
              className="group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 dark:ring-neutral-700 flex items-center transition-all"
            >
              Comienza ahora
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
