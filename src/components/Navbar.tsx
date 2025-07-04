import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { LogoName } from "./LogoName";
import { IoLogoWhatsapp } from "react-icons/io";

export const Navbar = () => {
   return (
      <nav className="h-[68px] px-4 lg:px-24 bg-yellow-400 flex justify-between items-center">
         <Link href={"/"} className="text-2xl font-black text-neutral-800 flex items-center gap-2">
            <Logo box="#262626" arrow="#262626" className="w-6 md:w-8" />
            <LogoName color="#262626" className="relative top-1 w-36 md:w-44" />
         </Link>
         <a
            href="https://wa.me/23409077046583?text=Hello%20I%20need%20a%20quote"
            target="blank"
            className="md:hidden border border-black rounded-md p-1 px-3 font-bold"
         >
            Call us
         </a>
         <a
            href="https://wa.me/23409077046583?text=Hello%20I%20need%20a%20quote"
            target="blank"
            className="hidden md:flex items-center gap-2"
         >
            <IoLogoWhatsapp className="text-2xl text-neutral-800" />
            <h1 className="text-2xl font-black text-neutral-800">020 8123 4567</h1>
         </a>
      </nav>
   );
};
