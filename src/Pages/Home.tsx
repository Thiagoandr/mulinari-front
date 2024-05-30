import CardAjudante from "@/components/ui/CardAjudante";
import Valores from "@/components/ui/Valores";
import React from "react";

const Home = () => {
  return (
    <div>
      <Valores></Valores>
      <section className=" *:mb-4">
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
      </section>
    </div>
  );
};

export default Home;
