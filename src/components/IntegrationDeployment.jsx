import Image from "next/image";

export default function IntegrationDeployment() {
   return (
      <section className="container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto w-full">
         <div className=" ">
            <h1 className="md:text-[64px] text-[40px] leading-[40px] md:leading-[48px] tracking-tighter text-center mb-3 md:mb-6">
               Integration & Deployment
            </h1>
            <h2 className="md:text-[24px] text-[20px] tracking-tighter text-center">
               Fast and Flexible Deployment for Any Infrastructure
            </h2>

            <div className="w-full flex justify-center text-white mt-8">
               <div className="lg:flex lg:space-y-0 space-y-4 items-start justify-between  lg:w-full w-96 lg:space-x-2  ">
                  <div className="bg-[#5FA2F7] xl:p-[40px] p-[28px] relative rounded-[40px] lg:w-1/3 md:h-[530px] h-[450px] overflow-clip">
                     <p className="1360:text-[48px] text-[40px] lg:text-[32px] text-[#B5F2B4] md:leading-[50px] leading-[42px] tracking-tighter">
                        Plug & Play APIs Integration
                     </p>
                     <div className="  h-full w-full flex justify-center items-center  ">
                        <div className="1360:w-[377px] w-[300px]  ">
                           <Image
                              src="/images/IntegrationDeployment1.png"
                              alt="How SpoofSense works - Capture"
                              className=""
                              width={601}
                              height={601}
                           />
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#67D164]  xl:p-[40px] p-[28px]  relative rounded-[40px] lg:w-1/3 md:h-[530px] h-[450px] overflow-clip">
                     <p className="1360:text-[48px] text-[40px] lg:text-[32px] text-[#B5F2B4] md:leading-[50px] leading-[42px] tracking-tighter h-[100px]">
                        Device Compatibility
                     </p>
                     <div className="  h-full w-full flex justify-center  items-center">
                        <div className="1360:w-[340px] w-[280px]  ">
                           <Image
                              src="/images/IntegrationDeployment2.png"
                              alt="How SpoofSense works - Capture"
                              className=""
                              width={344}
                              height={260}
                           />
                        </div>
                     </div>
                  </div>

                  <div className="bg-[#13242E]  xl:p-[40px] p-[28px]  relative rounded-[40px] lg:w-1/3 md:h-[530px] h-[450px] overflow-clip">
                     <p className="1360:text-[48px] text-[40px] lg:text-[32px] text-[#B5F2B4] md:leading-[50px] leading-[42px] tracking-tighter break-keep">
                        On-Prem Docker-Ready
                     </p>
                     <div className=" h-full w-full flex justify-center items-center">
                        <div className="1360:w-[249px] w-[200px]  ">
                           <Image
                              src="/images/IntegrationDeployment3.png"
                              alt="How SpoofSense works - Capture"
                              className=""
                              width={302}
                              height={316}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
