import Image from "next/image";
import ButtonWithIcon from "./shared/buttons/ButtonWithIcon";

export default function ReadyToFightIdentityFraud() {
   return (
      <section className="container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto w-full   ">
         <div className="md:flex items-start justify-between bg-[#F5F6FA] pt-7  px-1 md:px-0 md:pl-[74px] overflow-clip rounded-[40px] space-y-8 md:space-y-0">
            <div className="">
               <h1 className="md:text-[64px] text-[40px] leading-[40px] md:leading-[66px] ">
                  Ready to fight Identity fraud?
               </h1>
               <div className="flex items-center md:space-x-7 space-x-3">
                  <h1 className="md:text-[64px] text-[40px] leading-[40px] md:leading-[66px] ">
                     Get started
                  </h1>

                  <ButtonWithIcon
                     Title="Book Demo"
                     className="text-[16px] tracking-tighter bg-[#67D164] "
                  />
               </div>
            </div>
            <div className=" flex items-end -mr-4  justify-center md:justify-end">
               <Image
                  src="/images/ReadyToFightIdentityFraudBackground.png"
                  width={279}
                  height={148}
                  className=""
               />
            </div>
         </div>
      </section>
   );
}
