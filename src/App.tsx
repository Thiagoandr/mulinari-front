import React from "react";
import "./App.css";
import { Card, CardContent, CardTitle } from "./components/ui/card";
import { DollarSign, Truck, Tv, User } from "lucide-react";
import CardAjudante from "./components/ui/CardAjudante";

const App: React.FC = () => {
  return (
    <main>
      <section className="card-container">
        <div className="card">
          <Card className="card-1 flex flex-col justify-between p-6">
            <CardTitle className="text-left text-3xl">
              Faturamento Total
            </CardTitle>
            <CardContent className="flex p-0 gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <DollarSign size={25} className="text-emerald-600" />
                <span className="text-xl font-semibold">1.000,00</span>
              </div>
              <div className="flex p-0 gap-2 items-center">
                <Truck size={30} className="text-zinc-500/90"></Truck>
                <span className="text-xl font-semibold">40</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="card">
          <Card className="card-1 flex flex-col justify-between p-6">
            <CardTitle className="text-left text-3xl">
              Total das Diárias
            </CardTitle>
            <CardContent className="flex p-0 gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <DollarSign size={25} className="text-red-500" />
                <span className="text-xl font-semibold">1.000,00</span>
              </div>
              <div className="flex p-0 gap-2 items-center">
                <User size={30} className="text-zinc-500/90"></User>
                <span className="text-xl font-semibold">40</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className=" *:mb-4">
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
        <CardAjudante />
      </section>
    </main>
  );
};

export default App;
