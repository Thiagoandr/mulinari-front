import { DollarSign, Truck } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom";

const CardAjudante = () => {

    const navigate = useNavigate();

    return (
        <Card onClick = {() => navigate(`/ajudante`)} className="flex hover:scale-[1.01] transition-all justify-between items-center p-8 shadow-sm hover:shadow-lg hover:cursor-pointer">
          <CardTitle className="ml-4">Negueba</CardTitle>
          <CardContent className="flex gap-10 items-center p-0 mr-4">
            <div className="flex gap-2 items-center">
              <Truck size={30} className="text-zinc-500/90"></Truck>
              <span className="text-xl font-semibold">2</span>
            </div>
            <div className="flex gap-2 items-center">
              <DollarSign size={25} className="text-red-500" />
              <span className="text-xl font-semibold">180,00</span>
            </div>
          </CardContent>
        </Card>
    )
}

export default CardAjudante;