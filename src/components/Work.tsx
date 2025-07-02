import React from "react";
import { Button } from "./Button";

export const Work = () => {
   return (
      <div className="p-8 lg:p-24 flex flex-col justify-center items-center gap-6">
         <h1 className="text-center uppercase  text-[#015fab] font-medium">London Removals and Storage Services</h1>
         <h1 className="text-4xl font-bold text-center">
            How <span className="font-black">Primecrew </span> Service Works
         </h1>
         <p>
            Moving a sofa down the street or a whole house across the country? No matter what, AnyVan's man and van
            service includes:
         </p>

         <div className="w-[80%] grid lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
               <h1 className="text-2xl font-medium">💰 Price match guarantee</h1>
               <p>
                  Customers can save up to 40% with AnyVan, but if you find a better price let us know and we’ll beat
                  it!
               </p>
            </div>
            <div className="flex flex-col gap-2">
               <h1 className="text-2xl font-medium">✅ Free cancellations</h1>
               <p>
                  Plans changed? Edit or cancel your booking up to 48 hours before your move, with pay nothing until 3
                  days before
               </p>
            </div>
            <div className="flex flex-col gap-2">
               <h1 className="text-2xl font-medium"> 📆 Flexible move dates</h1>
               <p>
                  With over 5,000 transport partners we have the best man and van availability, making sure your move
                  happens!
               </p>
            </div>
         </div>
         <Button title="Learn more" variant="outline" className="!w-fit" />
      </div>
   );
};
