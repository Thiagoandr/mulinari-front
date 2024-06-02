import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { DollarSign, Truck, User } from 'lucide-react'

const CardServiço = () => {return (
    <Card  className=" ml-1 flex justify-between items-center p-8 hover:shadow-lg">
      <CardTitle className="ml-4">Rua dos bobos, Pau-Grande</CardTitle>
   
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
)
}

export default CardServiço