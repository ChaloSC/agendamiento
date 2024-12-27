import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AppointmentForm from "../components/AppointmentForm";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AppointmentForm />
    </div>
  );
};

export default Home;
