import React from "react";

export const Hero = () => {
   return (
      <div className="h-[70vh] bg-yellow-400 px-24 w-full flex gap-24 items-center justify-between overflow-hidden">
         <div className="flex-col flex gap-4 w-full">
            <h1 className="text-6xl text-sky-900 font-bold">Moving & Logistics</h1>
            <h1 className="text-7xl font-bold">Let's get your move on</h1>
            <p className="text-2xl font-medium">
               Find a price that’s right up your street, from the nation’s favourite way to move
            </p>
         </div>
         <div className="w-full">
            <img src="/landing.png" alt="landing-img" className="object-contain object-center h-full w-full" />
         </div>
      </div>
   );
};
