import Image from "next/image";

export default function HowSpoofSenseWorks() {
   return (
      <div className="md:my-[100px] my-[30px] space-y-8">
         <div className="md:text-[48px] text-[40px] font-medium text-center">
            How SpoofSense works
         </div>

         <div className="md:flex md:space-y-0 space-y-4 items-start justify-between  w-full space-x-2">
            <div className="bg-[#F5F6FA] p-2 rounded-[40px] md:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofSenseWorks1.png"
                        alt="How SpoofSense works - Capture"
                        className=""
                        width={389}
                        height={404}
                     />
                     <Image
                        src="/images/Capture.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute  md:top-3 top-2  md:left-3 -left-1  scale-75 md:scale-100"
                        width={178}
                        height={47}
                     />
                  </div>
               </div>
               <div className="text-[18px] leading-[20px] font-normal py-6 tracking-tighter pr-12 md:pl-8 pl-4">
                  The system processes a single image frame from any device,
                  including mobile, desktop, or webcams.
               </div>
            </div>

            <div className="bg-[#F5F6FA] p-2 rounded-[40px] md:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofSenseWorks2.png"
                        alt="How SpoofSense works - Capture"
                        className=""
                        width={389}
                        height={404}
                     />
                     <Image
                        src="/images/Analyse.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute  md:top-3 top-2  md:left-3 -left-1  scale-75 md:scale-100"
                        width={174}
                        height={51}
                     />
                  </div>
               </div>
               <div className="text-[18px] leading-[20px] font-normal py-6 tracking-tighter pr-12  md:pl-8 pl-4">
                  AI algorithms analyze the image for signs of liveness using 3D
                  passive detection methods.
               </div>
            </div>
            <div className="bg-[#F5F6FA] p-2 rounded-[40px] md:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofSenseWorks3.png"
                        alt="How SpoofSense works - Capture"
                        className=""
                        width={389}
                        height={404}
                     />
                     <Image
                        src="/images/Authenticate.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute md:top-3 top-2 md:left-3 -left-1 scale-75 md:scale-100"
                        width={235}
                        height={51}
                     />
                  </div>
               </div>
               <div className="text-[18px] leading-[20px] font-normal py-6 tracking-tighter pr-12  md:pl-8 pl-4">
                  A decision is delivered in under 2 seconds, ensuring real-time
                  fraud prevention.
               </div>
            </div>
         </div>
      </div>
   );
}
