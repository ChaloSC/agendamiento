import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-neutral-900 via-yellow-400 to-yellow-600 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-100 dark:via-purple-400 dark:to-purple-600 dark:bg-clip-text dark:text-transparent"
            >
              QuickGenda
            </a>
          </div>
          <nav className="flex space-x-4">
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Términos y condiciones
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Política de privacidad
            </a>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
