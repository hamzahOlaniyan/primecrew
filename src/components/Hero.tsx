"use client";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const Hero = () => {
   const router = useRouter();
   return (
      <div className="lg:h-[70vh] w-full px-4 pb-4 lg:pb-0  lg:px-24 bg-yellow-400 flex flex-col-reverse lg:flex-row lg:gap-24 items-center justify-between overflow-hidden">
         <div className="flex-col flex gap-8 lg:gap-16 w-full text-center lg:text-left">
            <div className="flex-col flex gap-4 w-full">
               <h1 className="text-5xl lg:text-6xl font-black text-neutral-800">Moving & Logistics</h1>
               <h1 className="text-4xl lg:text-[40px] font-bold text-neutral-800">Let's get your move on</h1>
               <p className="text-xl lg:text-2xl text-neutral-800 font-medium">
                  Find a price that’s right up your street, from the nation’s favourite way to move
               </p>
            </div>
            <div className="w-full bg-white shadow-md rounded-lg gap-3 p-5 flex flex-col md:flex-row">
               <Button title=" Get instant prices" onClick={() => router.push("/quote")} />
               <Button title=" 020 8123 4567" icon={<BsWhatsapp className="text-xl" />} variant="outline" />
            </div>
         </div>
         <div className="w-1/2 lg:w-full">
            <img src="/landing.png" alt="landing-img" className="object-contain object-center h-full w-full" />
         </div>
      </div>
   );
};
