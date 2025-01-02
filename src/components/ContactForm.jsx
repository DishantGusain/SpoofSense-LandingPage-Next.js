"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";
import ButtonWithIcon from "./shared/buttons/ButtonWithIcon";

const FORMSPARK_FORM_ID = "tYiZWoLkp";

export default function ContactForm() {
   const [active_spinner, setActiveSpinner] = useState(false);
   const [isFormSuccess, setisFormSuccess] = useState(false);

   const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
   });

   const [Name, setName] = useState("");
   const [Email, setEmail] = useState("");
   const [Company, setCompany] = useState("");
   const [Phone, setPhone] = useState("");
   const [Message, setMessage] = useState("");

   const onSubmit = async (e) => {
      e.preventDefault();
      setActiveSpinner(!active_spinner);
      await submit({
         Name,
         Email,
         Company,
         Phone,
         Message,
      });
      setisFormSuccess(true);
      setActiveSpinner(false);
   };

   const formSubmitPopupClose = () => {
      setisFormSuccess(false);
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
                  onSubmit={onSubmit}
                  data-formtrack
                  data-formtrack-params="utm_source, referrer,ref "
                  className="lg:w-[280px]  space-y-2 lg:text-[16px] text-[14px]"
               >
                  <div className="lg:text-[20px] text-[18px] font-medium">
                     Learn More
                  </div>
                  <input
                     type="text"
                     placeholder="Name"
                     required
                     name="name"
                     value={Name}
                     onChange={(e) => setName(e.target.value)}
                     className="w-full border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     required
                     name="Email"
                     value={Email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                  />

                  <div className="flex items-center space-x-2">
                     <input
                        type="text"
                        placeholder="Company"
                     required
                        name="Company"
                        value={Company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-1/2 border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                     />

                     <input
                        type="text"
                        placeholder="Phone"
                     required
                        name="Phone"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-1/2 border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                     />
                  </div>

                  <input
                     type="text"
                     placeholder="Message"
                     required
                     name="Message"
                     value={Message}
                     onChange={(e) => setMessage(e.target.value)}
                     className="w-full border border-slate-200 rounded-3xl py-2 px-4 outline-none  bg-white"
                  />

                  <div className="w-full flex justify-center">
                     <button
                        type="submit"
                        className="group inline-flex items-center py-[10px] px-[14px] font-semibold sm:text-base text-sm cursor-pointer  rounded-[40px] text-[#67D164] bg-black transition duration-300 no-underline"
                     >
                        Submit
                        {/* <Image
                           src="/images/arrowIconGreen.png"
                           alt="arrowIconGreen"
                           className={`ml-3  duration-700 ${active_spinner ? 'group-hover:scale-[1.15] group-hover:rotate-[270deg]' : ''}`}
                           width={24}
                           height={24}
                        /> */}
                            <Image
                           src="/images/arrowIconGreen.png"
                           alt="arrowIconGreen"
                           className="ml-3  duration-700 group-hover:scale-[1.15] group-hover:rotate-[270deg]"
                           width={24}
                           height={24}
                        />
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {isFormSuccess && (
            <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center   backdrop-filter backdrop-blur-sm  bg-white/5 z-50">
               <div className="lg:max-w-[40%] max-w-[80%] bg-gray-800 text-white rounded-2xl space-y-4 xl:px-28 px-4 lg:py-8 py-6 text-center">
                  <div className="flex items-center justify-center">
                     <div className="check-container ">
                        <div className="check-background">
                           <svg
                              viewBox="0 0 65 51"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M7 25L27.3077 44L58.5 7"
                                 stroke="white"
                                 strokeWidth="13"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </div>
                        <div className="check-shadow"></div>
                     </div>
                  </div>
                  <h1 className=" md:text-4xl text-2xl tracking-tighter text-[#41D195]  ">
                     Form Submitted successfully!
                  </h1>
                  {/* <p className="border-t-2 border-gray-500 text-gray-300 font-light lg:text-xs text-[10px] pt-2 mx-8">
                     Thanks for your form submission! Please check your email at
                     for further details. If you encounter any issues, feel free to reach out to us.
                  </p> */}
                  <div className="flex justify-center w-full">
                     {/* <button onClick={formSubmitPopupClose} className="w-[90%]" href="/">
                        <div className=" lg:p-4 p-2  bg-[#2FA9EE] text-white  text-center lg:text-[20px] text-[18px] font-semibold rounded-lg hover:bg-blue-500 duration-500 ring-2 ">
                           Back to SpoofSense
                        </div>
                     </button> */}

                     {/* <ButtonWithIcon
                                          Title="Back to SpoofSense"
                                          href="https://cal.com/kartikeya-bhardwaj-spoofsense/30min"
                                           target="_blank"
                                          alt=""
                                          className=""
                                       /> */}

                     <button
                        onClick={formSubmitPopupClose}
                        className="group inline-flex items-center  py-[10px] px-[14px] ] font-semibold sm:text-base text-sm cursor-pointer  rounded-[40px] text-white bg-[#5FA2F7] transition duration-300 no-underline"
                     >
                        Back to SpoofSense
                        <Image
                           src="/images/arrowIcon.png"
                           alt="Arrow Icon"
                           className="ml-3 group-hover:scale-[1.15] group-hover:rotate-[270deg] duration-700"
                           width={24}
                           height={24}
                        />
                     </button>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
}
