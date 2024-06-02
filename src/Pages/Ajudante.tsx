import CardServiço from "@/components/CardServiço";
import { CardTitle } from "@/components/ui/card";

const Ajudante = () => {
  return (
    <div>
  <div className="flex items-center">
    <img
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      alt="Ajudante"
      className="h-48 w-48 mr-5" 
    />
    <div className="ml-4">
      <CardTitle className="text-5xl">Negueba</CardTitle>
      <br />
      <span className="ml-0 text-x text-zinc-500">Edgar Bivara</span>
      <br />
      
    </div>
  </div>
  <CardServiço/>
  
  <CardServiço/>
  <CardServiço/>
  <CardServiço/>
</div>
  );
};

export default Ajudante;
