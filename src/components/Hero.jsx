import Image from "next/image";
import ButtonWithIcon from "./shared/buttons/ButtonWithIcon";

export default function Hero() {
   return (
      <section className="lg:my-[100px] my-[30px] container-padding  max-w-screen-screenPrimary  overflow-clip mx-auto">
         {/* lg:px-[104px] px-[12px]  */}
         <div className="flex items-start  lg:flex-row flex-col-reverse">
            <div className="lg:w-[43%] space-y-5 pr-3 ">
               <h2 className="lg:text-[20px] text-[18px] text-[#5FA2F7] ">
                  SpoofSense Face - 3D liveness Detection
               </h2>
               <h1 className="lg:text-[64px] text-[40px] font-medium lg:leading-[60px] leading-[40px] ">
                  Seamless Facial Liveness Detection{" "}
                  <br className="lg:hidden block" /> in &lt;1 Second
               </h1>
               <p className="text-[18px] leading-tight font-normal ">
                  iBeta Level-1 and Level-2 Compliant, SpoofSense Face delivers
                  cutting-edge 3D liveness detection that stops even the most
                  sophisticated spoofing attempts.
               </p>

               <div className="flex items-center lg:space-x-3 ">
                  <Image
                     src="/images/COMPLIANT-ISO-30107-3-LEVEL1.png"
                     alt="COMPLIANT-ISO-30107-3 LEVEL 1"
                     width={142}
                     height={62}
                     loading="lazy"
                     className="lg:scale-100  scale-90"
                  />

                  <Image
                     src="/images/COMPLIANT-ISO-30107-3-LEVEL1.png"
                     alt="COMPLIANT-ISO-30107-3 LEVEL 1"
                     width={142}
                     height={62}
                     loading="lazy"
                     className="lg:scale-100  scale-90"
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

            <div className="lg:w-[57%] ">
               <Image
                  src="/images/Hero.png"
                  alt="SpoofSense - Seamless Facial Liveness Detection in <1 Second"
                  className=""
                  priority={true}
                  width={1392}
                  height={806}
               />
            </div>
         </div>
      </section>
   );
}
