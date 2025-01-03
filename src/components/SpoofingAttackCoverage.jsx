import Image from "next/image";

export default function SpoofingAttackCoverage() {
   return (
      <section className="  bg-[#EAFADE]">
         <div className="lg:py-[100px] py-[30px] space-y-8 container-padding max-w-screen-screenPrimary  overflow-clip   mx-auto">
            <h1 className="lg:text-[48px] text-[40px] leading-[40px] lg:leading-[48px] font-medium text-center">
               360° Spoofing Attack Coverage
            </h1>
            <div className="flex justify-center">
               <div className="lg:flex lg:space-y-0 space-y-4 items-start justify-between  lg:w-full w-96  lg:space-x-2 ">
                  <div className="bg-[#F5F6FA] p-2 rounded-[40px] lg:w-1/3">
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
                              className="absolute  lg:top-3 top-2  lg:left-3 -left-1  scale-75 lg:scale-100"
                              width={168}
                              height={47}
                           />
                        </div>
                     </div>
                     <p className="text-lg leading-[24px] font-normal my-6 tracking-tighter pr-12 lg:pl-8 pl-4 line-clamp-4 ">
                        Hyper-realistic masks crafted using materials like
                        silicone, latex, resin, or wax, designed to mimic real
                        facial features and textures.
                     </p>
                  </div>

                  <div className="bg-[#F5F6FA] p-2 rounded-[40px] lg:w-1/3">
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
                              className="absolute  lg:top-3 top-2  lg:left-3 -left-1  scale-75 lg:scale-100"
                              width={217}
                              height={51}
                           />
                        </div>
                     </div>
                     <p className="text-lg leading-[24px] font-normal my-6 tracking-tighter pr-12 lg:pl-8 pl-4 line-clamp-4 ">
                        Executed by playing back pre-recorded videos of a real
                        person on a device screen to simulate live presence.
                     </p>
                  </div>
                  <div className="bg-[#F5F6FA] p-2 rounded-[40px] lg:w-1/3">
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
                              className="absolute lg:top-3 top-2 lg:left-3 -left-1 scale-75 lg:scale-100"
                              width={219}
                              height={51}
                           />
                        </div>
                     </div>
                     <p className="text-lg leading-[24px] font-normal my-6 tracking-tighter pr-12 lg:pl-8 pl-4 line-clamp-4 ">
                        Created using printed 2D images of a person's face,
                        these simple attacks mimic real faces but lack depth and
                        motion.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
