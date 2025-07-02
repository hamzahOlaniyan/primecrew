import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";

export const Hero = () => {
   return (
      <div className="h-[70vh] bg-yellow-400 px-24 w-full flex gap-24 items-center justify-between overflow-hidden">
         <div className="flex-col flex gap-16 w-full">
            <div className="flex-col flex gap-4 w-full">
               <h1 className="text-6xl font-black">Moving & Logistics</h1>
               <h1 className="text-5xl font-bold">Let's get your move on</h1>
               <p className="text-2xl font-medium">
                  Find a price that’s right up your street, from the nation’s favourite way to move
               </p>
            </div>
            <div className="bg-white shadow-md rounded-lg gap-3 p-5 flex">
               <Button title=" Get instant prices" />
               <Button title=" 020 8123 4567" icon={<BsWhatsapp className="text-xl" />} variant="outline" />
            </div>
         </div>
         <div className="w-full">
            <img src="/landing.png" alt="landing-img" className="object-contain object-center h-full w-full" />
         </div>
      </div>
   );
};
