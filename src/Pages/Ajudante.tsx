import React from 'react';
import { User } from 'lucide-react';
import { CardTitle } from '@/components/ui/card';

const Ajudante = () => {
  return (
    <div className="flex items-center">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="Ajudante"
        className="h-48 w-48 mr-5" 
      />
      <div className="ml-4">
        <CardTitle className="text-5xl">Negueba</CardTitle>
        <br></br>
        <span className=" ml-4 text-xl">teste teste teste</span>
      </div>
    </div>
  );
};

export default Ajudante;

