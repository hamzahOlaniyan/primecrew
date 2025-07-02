import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export const Navbar = () => {
   return (
      <nav className="h-16 px-24 bg-yellow-400 flex justify-between items-center">
         <h1 className="text-2xl font-black">Primecrew</h1>
         <div className="flex items-center gap-2">
            <BsWhatsapp className="text-xl" />
            <h1 className="text-2xl font-bold">020 8123 4567</h1>
         </div>
      </nav>
   );
};
