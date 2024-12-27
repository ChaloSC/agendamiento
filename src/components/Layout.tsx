import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar.tsx";
import { useSidebar } from "../contexts/SidebarContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isSidebarOpen } = useSidebar();

  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <div
        className={`flex flex-grow ${
          isScrolled ? "mt-[50px]" : "mt-[70px]"
        } transition-all duration-300 ease-in-out`}
      >
        {!isHomePage && <Sidebar />}
        <main
          className={`flex-grow transition-all duration-300 ease-in-out 
         `}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
