import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { useSidebar } from "../contexts/SidebarContext";
import { Moon, Sun, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Header() {
  const { width } = useWindowSize();
  const isWideScreen = (width ?? 0) < 768;
  const { theme, toggleTheme } = useTheme();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Citas", href: "/citas" },
    { name: "Servicios", href: "/servicios" },
    { name: "Acerca de", href: "/acerca" },
    { name: "Contacto", href: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out shadow-md
      ${
        isScrolled
          ? "py-2 bg-white/60 dark:bg-neutral-950/50 backdrop-blur-sm"
          : "py-4 bg-white/80 dark:bg-neutral-950 shadow-full-shadow"
      }
      `}
    >
      <div className="container mx-auto">
        <div
          className={`flex justify-between items-center ${
            isHomePage && "px-4"
          } px-4`}
        >
          <div className="flex items-center">
            {!isHomePage && (
              <Button
                onClick={toggleSidebar}
                variant="ghost"
                size={isScrolled ? "sm" : "icon"}
                className={`mr-2 transition-all duration-300 ${
                  isScrolled ? "p-1" : ""
                }`}
              >
                {isSidebarOpen ? (
                  <ChevronLeft
                    className={`${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    } text-gray-600 dark:text-gray-300`}
                  />
                ) : (
                  <ChevronRight
                    className={`${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    } text-gray-600 dark:text-gray-300`}
                  />
                )}
                <span className="sr-only">
                  {isSidebarOpen
                    ? "Cerrar barra lateral"
                    : "Abrir barra lateral"}
                </span>
              </Button>
            )}
            <Link
              to="/"
              className={`font-bold text-primary dark:text-white transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              AgendaPro
            </Link>
          </div>
          <div className="flex items-center">
            <nav
              className={`${
                isMenuOpen
                  ? "block bg-white/95 dark:bg-gray-800/95 justify-items-center text-lg transition-all duration-500 ease-in-out"
                  : "hidden"
              } md:block absolute md:relative top-full left-0 w-full md:w-auto z-50`}
            >
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-in-out ${
                        isScrolled ? "text-xs" : "text-sm"
                      } ${isWideScreen ? "hover:underline" : ""}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size={isScrolled ? "sm" : "icon"}
              className={`ml-2 transition-all duration-300 ${
                isScrolled ? "p-1" : ""
              }`}
            >
              {theme === "light" ? (
                <Moon
                  className={`${
                    isScrolled ? "h-4 w-4" : "h-5 w-5"
                  } text-gray-600 dark:text-gray-300`}
                />
              ) : (
                <Sun
                  className={`${
                    isScrolled ? "h-4 w-4" : "h-5 w-5"
                  } text-gray-600 dark:text-gray-300`}
                />
              )}
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size={isScrolled ? "sm" : "icon"}
              className={`md:hidden transition-all duration-300 ${
                isScrolled ? "p-1" : ""
              }`}
            >
              {isMenuOpen ? (
                <X
                  className={`${
                    isScrolled ? "h-4 w-4" : "h-5 w-5"
                  } text-gray-600 dark:text-gray-300`}
                />
              ) : (
                <Menu
                  className={`${
                    isScrolled ? "h-4 w-4" : "h-5 w-5"
                  } text-gray-600 dark:text-gray-300`}
                />
              )}
              <span className="sr-only">
                {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
