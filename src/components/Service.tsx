import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Service = () => {
   const servicesArray = [
      { title: "home removal", img: "/homeremoval.jpg", url: "/home-removal" },
      { title: "furniture & appliance", img: "/furniture.png", url: "/furniture-and-appliance" },
      { title: "office removal", img: "/office.jpg", url: "/office-removal" },
      { title: "logistic", img: "/logistic.jpg", url: "/logistics" },
   ];
   return (
      <div className="px-6 lg:px-48 py-12 lg:py-24 bg-[#ededed]">
         <h1 className="text-3xl lg:text-4xl font-bold text-center capitalize">More services</h1>
         <div className="grid grid-cols-2 gap-2 lg:gap-6 justify-between my-12">
            {servicesArray.map((ser) => (
               <Link
                  key={ser.title}
                  href={ser.url}
                  className="rounded-md h-28 lg:h-48 relative overflow-hidden bg-white shadow-md cursor-pointer group"
               >
                  <Image
                     src={ser?.img}
                     alt=""
                     width={500}
                     height={500}
                     priority
                     className="object-cover object-center h-full w-full opacity-55 hover:opacity-80 duration-300"
                  />
                  <h1 className="lg:text-2xl lg:text-nowrap text-center [text-shadow:_0_0px_7px_#fff] font-black capitalize absolute bottom-1 left-1/2 -translate-1/2">
                     {ser?.title}
                  </h1>
               </Link>
            ))}
         </div>
      </div>
   );
};
