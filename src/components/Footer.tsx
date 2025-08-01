import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const footerLinks = ["about us", "contact us", "get quote"];

export const Footer = () => {
   return (
      <div className="px-4 lg:px-24 pt-12 pb-2 bg-[#444444] text-white">
         <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-start">
            <div className="flex-col flex gap-4">
               <div className="flex-col flex gap-4">
                  <h1 className="text-2xl">020 8123 4567 </h1>
                  <p className="text-lg">We&apos;re here 7 days a week</p>
               </div>
               <div className="flex gap-3 items-center">
                  <div className="bg-[#909090] w-10 h-10 rounded-full hover:bg-stone-200 justify-center items-center flex">
                     <FaFacebookF className="text-[#444444]" />
                  </div>
                  <div className="bg-[#909090] w-10 h-10 rounded-full hover:bg-stone-200 justify-center items-center flex">
                     <FaLinkedinIn className="text-[#444444]" />
                  </div>
                  <div className="bg-[#909090] w-10 h-10 rounded-full hover:bg-stone-200 justify-center items-center flex">
                     <FaLinkedinIn className="text-[#444444]" />
                  </div>
               </div>
            </div>
            <ul className="">
               {footerLinks.map((link) => (
                  <li key={link}>
                     <Link href={"/"} className="capitalize font-semibold text-sm hover:underline">
                        {link}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <div className="w-full bg-[#909090]/50 h-[1px] my-5"></div>
         <div className="lg:flex justify-between items-center font-semibold text-sm">
            <div className="w-full">
               <Link href={""} className="hover:underline">
                  Privacy policy |
               </Link>{" "}
               <Link href={""} className="hover:underline">
                  Terms of use |
               </Link>{" "}
               <Link href={""} className="hover:underline">
                  Insurance |
               </Link>{" "}
               <Link href={""} className="hover:underline">
                  Sitemap
               </Link>
            </div>
            <p>Copyright © 2025 Primecrew Ltd. All rights reserved.</p>
         </div>
         <p className="text-tiny lg:text-sm text-center my-6">
            Primecrew Ltd is an Appointed Representative of Eggar Forrester Insurance who are Authorised and Regulated
            by the Financial Conduct Authority. FCA Number 300008 Primecrew Limited is a company registered in England
            and Wales. | Registered address: 5th Floor, The street, Haringay, London, N22 6AJ | Company number: 0000000
         </p>
      </div>
   );
};
