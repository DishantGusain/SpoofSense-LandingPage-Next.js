import Image from "next/image";

export default function HowSpoofSenseWorks() {
   return (
      <section className="lg:my-[100px] my-[30px] space-y-8 container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto">
         <h1 className="lg:text-[48px] text-[40px] leading-[40px] lg:leading-[48px] font-medium text-center">
            How SpoofSense works
         </h1>

         <div className="lg:flex lg:space-y-0 space-y-4 items-start justify-between  lg:w-full w-96 lg:space-x-2 ">
            <div className="bg-[#F5F6FA] p-2 rounded-[40px] lg:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofSenseWorks1.png"
                        alt="How SpoofSense works - Capture"
                        className="w-96  rounded-[40px]"
                        width={1300}
                        height={1350}
                     />
                     <Image
                        src="/images/Capture.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute  lg:top-3 top-2  lg:left-3 -left-1  scale-75 lg:scale-100"
                        width={178}
                        height={47}
                     />
                  </div>
               </div>
               <p className="text-[18px] leading-[20px] font-normal my-6 tracking-tighter pr-12 lg:pl-8 pl-4  line-clamp-3">
                  The system processes a single image frame from any device,
                  including mobile, desktop, or webcams.
               </p>
            </div>

            <div className="bg-[#F5F6FA] p-2 rounded-[40px] lg:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofSenseWorks2.png"
                        alt="How SpoofSense works - Analyse"
                        className="w-96  rounded-[40px]"
                        width={1300}
                        height={1354}
                     />
                     <Image
                        src="/images/Analyse.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute  lg:top-3 top-2  lg:left-3 -left-1  scale-75 lg:scale-100"
                        width={174}
                        height={51}
                     />
                  </div>
               </div>
               <p className="text-[18px] leading-[20px] font-normal  my-6 tracking-tighter pr-12  lg:pl-8 pl-4 line-clamp-3">
                  AI algorithms analyze the image for signs of liveness using 3D
                  passive detection methods.
               </p>
            </div>
            <div className="bg-[#F5F6FA] p-2 rounded-[40px] lg:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofSenseWorks3.png"
                        alt="How SpoofSense works - Authenticate"
                        className="w-96  rounded-[40px]"
                        width={1300}
                        height={1354}
                     />
                     <Image
                        src="/images/Authenticate.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute lg:top-3 top-2 lg:left-3 -left-1 scale-75 lg:scale-100"
                        width={235}
                        height={51}
                     />
                  </div>
               </div>
               <p className="text-[18px] leading-[20px] font-normal my-6 tracking-tighter pr-12  lg:pl-8 pl-4 line-clamp-3">
                  A decision is delivered in under 2 seconds, ensuring real-time
                  fraud prevention.
               </p>
            </div>
         </div>
      </section>
   );
}
