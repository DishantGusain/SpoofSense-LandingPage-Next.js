import Image from "next/image";
export default function Testimonial() {
   return (
      <section className="container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto my-44">
         <div className="relative space-y-44">
            <h1 className="lg:text-[54px] text-[46px] italic lg:leading-[54px] leading-[46px] tracking-tighter font-medium text-center">
               We found SpoofSense Face to have
               <br className="lg:block hidden" /> 0% FPR in our evaluation
               <br />
               <span className="text-[#67D164]">-Global KYC Platform</span>
            </h1>

            <div className="sm:flex items-center lg:justify-between sm:space-x-7 space-y-6 sm:space-y-0 w-full lg:px-28 px-4">
               <div className="sm:w-1/2 flex justify-center">
                  <Image
                     src="/images/COMPLIANT-ISO-Large.png"
                     alt="COMPLIANT-ISO-30107-3 LEVEL 1"
                     width={1000}
                     height={438}
                     loading="lazy"
                     className=""
                  />
               </div>

               <div className="sm:w-1/2  justify-center">
                  <Image
                     src="/images/COMPLIANT-ISO-Large.png"
                     alt="COMPLIANT-ISO-30107-3 LEVEL 1"
                     width={1000}
                     height={438}
                     loading="lazy"
                     className=""
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
