import Image from "next/image";
import ButtonPrimary from "./shared/buttons/ButtonPrimary";
import ButtonSecondary from "./shared/buttons/ButtonSecondary";
import { DM_Sans } from "next/font/google";

export default function Navbar() {
   return (
      <div className="w-full drop-shadow shadow overflow-clip flex justify-center">
         <div className="  w-full flex items-center justify-between py-[22px]   md:px-[104px] px-[12px] max-w-screen-screenPrimary  font-semibold">
            <div className="">
               <Image src="/images/logo.png" alt="SpoofSense Logo" width={176.35} height={32.98} className=""/>
            </div>
            <div className="  flex items-center  space-x-[46px]">
               
               <div className="hidden md:block">
                  <ButtonSecondary
                     href="/"
                     className=""
                     Title="Blog"
                  />
               </div>
               <div className="hidden md:block">
                  <ButtonSecondary
                     href="/"
                     className="  "
                     Title="Documentation"
                  />
               </div>
               <div className="  ">
                  <ButtonPrimary
                     href="https://cal.com/kartikeya-bhardwaj-spoofsense/30min"
                      target="_blank"
                     Title="Book Demo"
                     className=" "
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
