import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, Info, Phone, Home } from "lucide-react";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useSidebar();

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Citas", href: "/citas" },
    { name: "Servicios", href: "/servicios" },
    { name: "Acerca de", href: "/acerca" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <aside
      className={`w-40 z-[40] bg-gray-100/95 dark:bg-gray-800/95 fixed h-full overflow-auto transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="mt-2">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Home className="mr-3 h-5 w-5" />
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/citas"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Citas
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Users className="mr-3 h-5 w-5" />
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/acerca"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Info className="mr-3 h-5 w-5" />
              Acerca de
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Phone className="mr-3 h-5 w-5" />
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
