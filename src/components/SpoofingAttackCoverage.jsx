import Image from "next/image";

export default function SpoofingAttackCoverage() {
   return (
      <div className="md:py-[100px] bg-[#EAFADE] py-[30px] space-y-8 container-padding ">
         <div className="md:text-[48px] text-[40px] leading-[40px] md:leading-[48px] font-medium text-center">
            360° Spoofing Attack Coverage
         </div>

         <div className="md:flex md:space-y-0 space-y-4 items-start justify-between  w-full  md:space-x-2">
            <div className="bg-[#F5F6FA] p-2 rounded-[40px] md:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofingCoverage1.png"
                        alt="How SpoofSense works - Capture"
                        className="w-96  rounded-[40px]"
                        width={1300}
                        height={1362}
                     />
                     <Image
                        src="/images/3dMasks.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute  md:top-3 top-2  md:left-3 -left-1  scale-75 md:scale-100"
                        width={168}
                        height={47}
                     />
                  </div>
               </div>
               <p className="text-xl leading-[24px] font-normal my-6 tracking-tighter pr-12 md:pl-8 pl-4 line-clamp-4 ">
                  Hyper-realistic masks crafted using materials like silicone,
                  latex, resin, or wax, designed to mimic real facial features
                  and textures.
               </p>
            </div>

            <div className="bg-[#F5F6FA] p-2 rounded-[40px] md:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofingCoverage2.png"
                        alt="How SpoofSense works - Analyse"
                        className="w-96  rounded-[40px]"
                        width={1300}
                        height={1362}
                     />
                     <Image
                        src="/images/DigitalReplays.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute  md:top-3 top-2  md:left-3 -left-1  scale-75 md:scale-100"
                        width={217}
                        height={51}
                     />
                  </div>
               </div>
               <div className="text-xl leading-[24px] font-normal my-6 tracking-tighter pr-12 md:pl-8 pl-4 line-clamp-4 ">
                  Executed by playing back pre-recorded videos of a real person
                  on a device screen to simulate live presence.
               </div>
            </div>
            <div className="bg-[#F5F6FA] p-2 rounded-[40px] md:w-1/3">
               <div className="">
                  <div className="relative">
                     <Image
                        src="/images/SpoofingCoverage3.png"
                        alt="How SpoofSense works - Authenticate"
                        className="w-96  rounded-[40px]"
                        width={1300}
                        height={1361}
                     />
                     <Image
                        src="/images/PrintedMasks.png"
                        alt="How SpoofSense works - Capture"
                        className="absolute md:top-3 top-2 md:left-3 -left-1 scale-75 md:scale-100"
                        width={219}
                        height={51}
                     />
                  </div>
               </div>
               <div className="text-xl leading-[24px] font-normal my-6 tracking-tighter pr-12 md:pl-8 pl-4 line-clamp-4 ">
                  Created using printed 2D images of a person's face, these
                  simple attacks mimic real faces but lack depth and motion.
               </div>
            </div>
         </div>
      </div>
   );
}
