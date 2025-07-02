import React from "react";

export const Service = () => {
   const servicesArray = [
      { title: "home removal", img: "/homeremoval.jpg" },
      { title: "furniture & appliance", img: "/furniture.png" },
      { title: "office removal", img: "/office.jpg" },
      { title: "logistic", img: "/logistic.jpg" },
   ];
   return (
      <div className="px-48 py-24 bg-[#ededed]">
         <h1 className="text-4xl font-bold text-center capitalize">More services</h1>
         <div className="grid grid-cols-2 gap-6 justify-between my-12">
            {servicesArray.map((ser) => (
               <article className="rounded-md h-48 relative overflow-hidden bg-white shadow-md cursor-pointer group">
                  <img
                     src={ser?.img}
                     alt=""
                     className="object-cover object-center h-full w-full opacity-55 hover:opacity-80 duration-300"
                  />
                  <h1 className="text-[28px] text-nowrap text-center font-black uppercase absolute bottom-1 left-1/2 -translate-1/2">
                     {ser?.title}
                  </h1>
               </article>
            ))}
         </div>
      </div>
   );
};
