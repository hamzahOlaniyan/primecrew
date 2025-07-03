"use client";
import React from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const WhatWeDo = () => {
   const router = useRouter();
   return (
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 py-12 lg:p-24 lg-py-0 bg-[#015fab]">
         <div className=" text-white flex flex-col gap-3">
            <h1 className="text-4xl font-bold ">We move more for less</h1>
            <div className="w-full h-[1px] bg-[#056abd]"></div>
            <p>
               That’s less cost, less stress, and less fuss, which means you can enjoy more time focusing on your
               exciting new home move instead.
            </p>
            <p>
               Our rockstar team of local experts have already helped over 2.5 million customers move covering
               everything from one-bedroom flats or smaller households to larger properties, all with a five star
               service. Just check out our recent jobs and reviews!s
            </p>
            <Button title=" Get instant prices" onClick={() => router.push("/quote")} className="!w-fit mt-6" />
         </div>
         <div className=" text-white flex flex-col gap-3">
            <h1 className="text-4xl font-bold ">Every move is great, when it&apos;s got a great home mover</h1>
            <div className="w-full h-[1px] bg-[#056abd]"></div>
            <p>
               We know that every move is unique, and so that&apos;s why every removal comes with a dedicated local
               expert, and:
            </p>
            <p>An unbeatable price - Up to 40% cheaper than others with a price match guarantee, and no hidden fees</p>
            <p>48 hour cancellation - Plans changed? No worries, edit or cancel your booking up to 2 days beforehand</p>
            <p>Peace of mind - We include £50k fire and theft cover as standard (see our T&Cs for more info)</p>
         </div>
      </div>
   );
};
