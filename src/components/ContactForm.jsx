"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
         ...formData,
         from: formData.email, // Ensure that 'from' is included with the email value
      };

      console.log(formData); // Check if data is correct
      const response = await fetch("/api/ContactForm", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
      });
      if (response.ok) {
         alert("Form submitted successfully!");
         setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
         });
      } else {
         alert("Form submission failed!");
      }
   };

   return (
      <section className="  container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto">
         <div className="bg-[#67D164]  lg:my-[100px] my-[30px] lg:px-[185px] px-[16px]  lg:py-[72px]  py-[40px]  lg:rounded-[40px] rounded-[20px] flex items-center justify-between  lg:flex-row flex-col">
            <div className="lg:w-[55%]  space-y-3 text-white">
               <h1 className="font-normal lg:text-[48px] text-[34px] lg:leading-[48px] leading-[34px] tracking-tighter">
                  The Leading Facial Liveness Detection Solution
               </h1>

               <p className="font-normal lg:text-[18px] text-[16px] tracking-tighter">
                  SpoofSense enhances digital security with advanced face
                  presentation detection detection, offering a multi-layered
                  defense against spoofing attacks of all types.
               </p>
            </div>

            <div className="lg:w-[45%] flex mt-4 lg:mt-0 justify-end">
               <form
                  onSubmit={handleSubmit}
                  className="lg:w-[280px]  space-y-2 lg:text-[16px] text-[14px]"
               >
                  <div className="lg:text-[20px] text-[18px] font-medium">
                     Learn More
                  </div>
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     name="email"
                     value={formData.email} // Controlled input
                     onChange={handleChange} // Update state on change
                     className="w-full border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                  />

                  <div className="flex items-center space-x-2">
                     <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-1/2 border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                     />

                     <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-1/2 border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                     />
                  </div>

                  <input
                     type="text"
                     placeholder="Message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                  />

                  <div className="w-full flex justify-center">
                     <button
                        type="submit"
                        className="group inline-flex items-center py-[10px] px-[14px] font-semibold sm:text-base text-sm cursor-pointer  rounded-[40px] text-[#67D164] bg-black transition duration-300 no-underline"
                     >
                        Submit
                        <Image
                           src="/images/arrowIconGreen.png"
                           alt=""
                           className="ml-3 group-hover:scale-[1.15] group-hover:rotate-[270deg] duration-700"
                           width={24}
                           height={24}
                        />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
