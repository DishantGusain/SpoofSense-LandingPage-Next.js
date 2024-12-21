import Image from "next/image";
import ButtonPrimary from "./shared/buttons/ButtonPrimary";
import ButtonWithIcon from "./shared/buttons/ButtonWithIcon";

export default function Hero() {
   return (
      <div className="md:py-[100px] py-[30px]">
         <div className="flex items-start  md:flex-row flex-col-reverse">
            <div className="md:w-[45%] space-y-5">
               <h1 className="md:text-[20px] text-[18px] text-[#5FA2F7]">
                  SpoofSense Face - 3D liveness Detection
               </h1>
               <h1 className="md:text-[64px] text-[40px] font-medium md:leading-[60px] leading-[40px] tracking-tighter">
                  Seamless Facial Liveness Detection  <br className="md:hidden block"/>  in &lt;1 Second
               </h1>
               <p className="text-[18px] leading-tight font-normal">
                  iBeta Level-1 and Level-2 Compliant, SpoofSense Face delivers
                  cutting-edge 3D liveness detection that stops even the most
                  sophisticated spoofing attempts.
               </p>

               <div className="flex items-center space-x-3 ">
                  <Image
                     src="/images/COMPLIANT-ISO-30107-3-LEVEL1.png"
                     alt="COMPLIANT-ISO-30107-3 LEVEL 1"
                     width={142}
                     height={62}
                     className=""
                  />

                  <Image
                     src="/images/COMPLIANT-ISO-30107-3-LEVEL1.png"
                     alt="COMPLIANT-ISO-30107-3 LEVEL 1"
                     width={142}
                     height={62}
                     className=""
                  />
               </div>

               <div className="pt-3">
                  <ButtonWithIcon
                     Title="Book Demo"
                     alt=""
                     className=""
                  />
               </div>
            </div>

            <div className="md:w-[55%] pb-[14px]">
               <Image
                  src="/images/Hero.png"
                  alt="SpoofSense - Seamless Facial Liveness Detection in <1 Second"
                  className=""
                  width={696}
                  height={403}
               />
            </div>
         </div>
      </div>
   );
}