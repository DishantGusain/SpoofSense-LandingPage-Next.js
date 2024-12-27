import Image from "next/image";

export default function FooterNavlinks() {
   return (
      <section className="container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto w-full md:pb-12 pb-20 text-[#13242E] ">
         <div className="md:flex items-start justify-between md:space-x-16">
            <div className="md:w-1/3">
               <a
                  href="/"
                  className="flex items-center   justify-between   py-[18px] border-b-2 cursor-pointer group"
               >
                  <div className="space-x-3    flex items-center   justify-between">
                     <div className="w-[33px] ">
                        <Image
                           src="/images/emailIcon.png"
                           alt="SpoofSense Email Address"
                           width={100}
                           height={79}
                           className=""
                        />
                     </div>

                     <h2 className="text-[16px] ">Email</h2>
                  </div>

                  <div className="w-[18px]">
                     <Image
                        src="/images/navLinkArrowIcon.png"
                        alt="SpoofSense Nav Link"
                        width={190}
                        height={148}
                        className="group-hover:rotate-[270deg] duration-500"
                     />
                  </div>
               </a>

               <a
                  href="/"
                  className="flex items-center   justify-between py-[18px]  border-b-2 md:border-b-0  cursor-pointer group"
               >
                  <div className="space-x-3    flex items-center   justify-between">
                     <div className="w-[32px]">
                        <Image
                           src="/images/twitterIcon.png"
                           alt="SpoofSense Twitter Link"
                           width={100}
                           height={82}
                           className="rounded"
                        />
                     </div>

                     <h2 className="text-[16px]">Twitter</h2>
                  </div>

                  <div className="w-[18px]">
                     <Image
                        src="/images/navLinkArrowIcon.png"
                        alt="SpoofSense Nav Link"
                        width={190}
                        height={148}
                        className="group-hover:rotate-[270deg] duration-500"
                     />
                  </div>
               </a>
            </div>

            <div className="md:w-1/3">
               <a
                  href="/"
                  className="flex items-center   justify-between   py-[18px] border-b-2 cursor-pointer group"
               >
                  <div className="space-x-3    flex items-center   justify-between">
                     <div className="w-[26px]">
                        <Image
                           src="/images/linkedInIcon.png"
                           alt="SpoofSense Linked In"
                           width={100}
                           height={100}
                           className=""
                        />
                     </div>

                     <h2 className="text-[16px]">LinkedIn</h2>
                  </div>

                  <div className="w-[18px]">
                     <Image
                        src="/images/navLinkArrowIcon.png"
                        alt="SpoofSense Nav Link"
                        width={190}
                        height={148}
                        className="group-hover:rotate-[270deg] duration-500"
                     />
                  </div>
               </a>

               <a
                  href="/"
                  className="flex items-center   justify-between py-[18px] border-b-2 md:border-b-0   cursor-pointer group"
               >
                  <div className="space-x-3    flex items-center   justify-between">
                     <div className="w-[29px]">
                        <Image
                           src="/images/documentationIcon.png"
                           alt="SpoofSense Documentation"
                           width={100}
                           height={90}
                           className="rounded-t-lg rounded-br-lg"
                        />
                     </div>

                     <h2 className="text-[16px]">Documentation</h2>
                  </div>

                  <div className="w-[18px]">
                     <Image
                        src="/images/navLinkArrowIcon.png"
                        alt="SpoofSense Nav Link"
                        width={190}
                        height={148}
                        className="group-hover:rotate-[270deg] duration-500"
                     />
                  </div>
               </a>
            </div>

            <div className="md:w-1/3">
               <a
                  href="/"
                  className="flex items-center   justify-between   py-[18px] border-b-2 cursor-pointer group"
               >
                  <div className="space-x-3    flex items-center   justify-between">
                     <div className="w-[29px]">
                        <Image
                           src="/images/playIcon.png"
                           alt="Book a Demo for SpoofSense"
                           width={100}
                           height={90}
                           className="rounded-lg"
                        />
                     </div>

                     <h2 className="text-[16px]">Book a Demo</h2>
                  </div>
                  <div className="w-[18px]  ">
                     <Image
                        src="/images/navLinkArrowIcon.png"
                        alt="SpoofSense Nav Link"
                        width={190}
                        height={148}
                        className="group-hover:rotate-[270deg] duration-500"
                     />
                  </div>
               </a>
            </div>
         </div>
      </section>
   );
}
