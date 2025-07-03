import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

export const Navbar = () => {
   return (
      <nav className="h-[68px] px-4 lg:px-24 bg-yellow-400 flex justify-between items-center">
         <h1 className="text-2xl font-black text-neutral-800 flex items-center gap-2">
            <FaLocationArrow className="text-white text-md" />
            <Link href={"/"}> Primecrew</Link>
         </h1>
         <div className="hidden md:flex items-center gap-2">
            <BsWhatsapp className="text-xl text-neutral-800" />
            <h1 className="text-2xl font-bold text-neutral-800">020 8123 4567</h1>
         </div>
      </nav>
   );
};
