import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/citas" element={<Appointments />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/acerca" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
