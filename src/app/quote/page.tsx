import { Button } from "@/components/Button";
import React from "react";

export default function Quote() {
   const service = ["House Move", "Office Move", "Single Item Transport", "Furniture Delivery", "Storage"];
   const size = ["Small (1–2 items)", "Medium (1 Bedroom)", "Large (2–3 Bedrooms)", "Extra Large (4+ Bedrooms)"];
   const contact = ["phone", "email", "whatsapp"];

   return (
      <div className="px-24 my-12">
         <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-neutral-800">Request a Quote</h1>
            <div className="w-full flex gap-4">
               <div className="bg-white border border-neutral-300 rounded-lg p-8 w-3/4 ">
                  <form action="" className="w-full flex flex-col gap-4">
                     <div className="flex flex-col gap-2">
                        {/* PERSONAL INFO */}
                        <div className="flex gap-2">
                           <input
                              type="name"
                              placeholder="First name"
                              className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                           />
                           <input
                              type="name"
                              placeholder="Last name"
                              className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                           />
                        </div>
                        <input
                           type="email"
                           placeholder="Email"
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        />
                        <input
                           type="number"
                           placeholder="phone number"
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        />
                        <input
                           type="date"
                           placeholder=""
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        />
                     </div>
                     {/* ADDRESS */}
                     <div className="w-full flex gap-3">
                        <div className="w-full flex flex-col gap-2">
                           <h1 className="text-sm font-medium">Pick-Up Address/Postcode (Required)</h1>
                           <input
                              type="text"
                              placeholder="Address line 1"
                              className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                           />
                           <input
                              type="text"
                              placeholder="Address line 2"
                              className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                           />
                           <div className="flex gap-3">
                              <input
                                 type="text"
                                 placeholder="City"
                                 className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                              />
                              <input
                                 type="text"
                                 placeholder="Post code"
                                 className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                              />
                           </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                           <h1 className="text-sm font-medium">Delivery Address/Postcode (Required)</h1>
                           <input
                              type="text"
                              placeholder="Address line 1"
                              className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                           />
                           <input
                              type="text"
                              placeholder="Address line 2"
                              className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                           />
                           <div className="flex gap-3">
                              <input
                                 type="text"
                                 placeholder="City"
                                 className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                              />
                              <input
                                 type="text"
                                 placeholder="Post code"
                                 className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <select
                           name="service"
                           id="service"
                           required
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        >
                           <option value="" disabled hidden>
                              Type of Service (Required)
                           </option>
                           {service.map((service) => (
                              <option key={service} value={service}>
                                 {service}
                              </option>
                           ))}
                        </select>
                        <select
                           name="size"
                           id="size"
                           required
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        >
                           <option value="" disabled hidden>
                              Size of Move (Required)
                           </option>
                           {size.map((s) => (
                              <option key={s} value={s}>
                                 {s}
                              </option>
                           ))}
                        </select>
                        <select
                           name="contact"
                           id="contact"
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        >
                           <option value="" disabled hidden>
                              Preferred Contact Method (Optional)
                           </option>
                           {contact.map((c) => (
                              <option key={c} value={c}>
                                 {c}
                              </option>
                           ))}
                        </select>
                        <textarea
                           placeholder="Additional Details or Special Requirements (Optional)"
                           aria-multiline
                           rows={30}
                           className="w-full border border-neutral-300 rounded-lg p-2 h-10"
                        />
                     </div>
                     <Button title="Submit" />
                  </form>
               </div>
               <div className="">
                  <h1>Quote ref: 22809703</h1>
                  <p className="text-3xl font-black text-neutral-700">0208 000 0000</p>
               </div>
            </div>
         </div>
      </div>
   );
}
