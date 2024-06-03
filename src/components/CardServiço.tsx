import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { DollarSign, Truck, User } from "lucide-react";
import { Button } from "./ui/button";

const CardServiço = () => {
  return (
    <Card className="ml-1 flex justify-between items-center p-8 hover:shadow-lg hover:scale-[1.01] transition-transform cursor-pointer ">
      <div>
        <div className="ml-4">
          <CardTitle>Rua dos bobos, Pau-Grande</CardTitle>
          <div className="items-center gap-1 flex mt-2">
            <span className="text-x text-gray-500 font-italic">
              Abelardo Barboza
            </span>
            <p className="text sm ml-0 text-gray-400 italic">- 02/10/2023</p>
          </div>
        </div>
      </div>

      <CardContent className="flex gap-10 items-center p-0 mr-4">
        <div className="flex gap-2 items-center">
          <User size={30} className="text-zinc-500/90"></User>

          <span className="text-xl font-semibold">2</span>
        </div>
        <div className="flex gap-2 items-center">
          <DollarSign size={25} className="text-emerald-600" />
          <span className="text-xl font-semibold">180,00</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardServiço;
