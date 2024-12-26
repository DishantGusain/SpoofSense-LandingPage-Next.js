import Image from "next/image";

export default function UnmatchedAccuracy() {
   return (
      <section className="container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto    tracking-tighter">
         <div className="lg:px-56 space-y-8 py-[100px]">
            <h1 className="lg:text-7xl text-5xl font-medium text-center  ">
               Unmatched <span className="text-[#67D164]">Accuracy</span> for
               Real Faces
            </h1>

            <div className=" relative flex lg:space-y-0 space-y-4 items-stretch justify-between  w-full ">
               <div className="absolute z-10 w-full h-full flex items-center lg:pb-[6%] pb-[3%] lg:px-5 px-2">
                  <div className=" z-10 w-full lg:h-[310px] h-40 md:h-72 lg:rounded-[40px] rounded-3xl border-2"></div>
               </div>
               <div className=" lg:rounded-[40px] rounded-3xl bg-red-400 lg:w-1/4">
                  <Image
                     src="/images/dziana-hasanbekava.png"
                     alt="How SpoofSense works - Capture"
                     className="h-full lg:rounded-[40px] rounded-3xl"
                     width={1300}
                     height={3500}
                  />
               </div>
               <div className="  lg:rounded-[40px] rounded-3xl lg:w-1/4">
                  <Image
                     src="/images/olly.png"
                     alt="How SpoofSense works - Capture"
                     className="   lg:rounded-[40px] rounded-3xl"
                     width={1300}
                     height={3500}
                  />
               </div>
               <div className="  lg:rounded-[40px] rounded-3xl lg:w-1/4">
                  <Image
                     src="/images/mart-production.png"
                     alt="How SpoofSense works - Capture"
                     className="   lg:rounded-[40px] rounded-3xl"
                     width={1300}
                     height={3500}
                  />
               </div>
               <div className=" lg:rounded-[40px] rounded-3xl lg:w-1/4">
                  <Image
                     src="/images/italo-melo.png"
                     alt="How SpoofSense works - Capture"
                     className=" h-full  lg:rounded-[40px] rounded-3xl"
                     width={1300}
                     height={3500}
                  />
               </div>
            </div>
         </div>

         <div className="lg:flex lg:space-y-0 space-y-4 items-stretch justify-between  w-full lg:space-x-2">
            <div className="bg-[#F5F6FA] p-3 rounded-[40px] lg:w-1/4">
               <div className="relative h-[112px] w-full">
                  <Image
                     src="/images/Icon1.png"
                     alt="How SpoofSense works - Capture"
                     className="absolute top-0  right-0  w-20 rounded-3xl"
                     width={200}
                     height={120}
                  />
               </div>

               <div className="px-3 pb-6 space-y-[18px] ">
                  <h2 className="text-[28px] font-medium leading-[30px]  tracking-tighter">
                     Ultra - Low False Rejection Rate &#40;FRR&#41;
                  </h2>
                  <div className="space-y-3">
                     <p className="text-[18px]  leading-[20px] font-normal ">
                        Our advanced algorithms ensure real users are never
                        turned away, achieving industry-leading accuracy.
                     </p>

                     <p className="text-lg leading-[20px] font-medium ">
                        Achieved 0% FRR in ISO 30107-3 evaluations
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-[#F5F6FA] p-3 rounded-[40px] lg:w-1/4">
               <div className="relative h-[112px] w-full">
                  <Image
                     src="/images/Icon2.png"
                     alt="How SpoofSense works - Capture"
                     className="absolute top-0  right-0  w-20 rounded-3xl"
                     width={200}
                     height={120}
                  />
               </div>

               <div className="px-3 pb-6 space-y-[18px] ">
                  <h2 className="text-[28px] font-medium leading-[30px] tracking-tighter break-keep">
                     Inclusive and Bias-Free
                  </h2>
                  <div className="space-y-3">
                     <p className="text-[18px]  leading-[20px] font-normal  ">
                        Trained to perform equally well across all skin
                        tones, genders, and ethnicities, ensuring fairness for
                        every user.
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-[#F5F6FA] p-3 rounded-[40px] lg:w-1/4">
               <div className="relative h-[112px] w-full">
                  <Image
                     src="/images/Icon3.png"
                     alt="How SpoofSense works - Capture"
                     className="absolute top-0  right-0  w-20 rounded-3xl"
                     width={200}
                     height={120}
                  />
               </div>

               <div className="px-3 pb-6 space-y-[18px] ">
                  <h2 className="text-[28px] font-medium leading-[30px] tracking-tighter">
                     Robust Across Lighting Conditions
                  </h2>
                  <div className="space-y-3">
                     <p className="text-[18px]  leading-[20px] font-normal  ">
                        Works seamlessly in a variety of environments, from low
                        light to bright outdoor settings, without compromising
                        on detection quality.
                     </p>
                  </div>
               </div>
            </div>

            <div className="bg-[#F5F6FA] p-3 rounded-[40px] lg:w-1/4">
               <div className="relative h-[112px] w-full">
                  <Image
                     src="/images/Icon4.png"
                     alt="How SpoofSense works - Capture"
                     className="absolute top-0  right-0  w-20 rounded-3xl"
                     width={200}
                     height={120}
                  />
               </div>

               <div className="px-3 pb-6 space-y-[18px] ">
                  <h2 className="text-[28px] font-medium leading-[30px] tracking-tighter">
                     Built for Real-World Challenges
                  </h2>
                  <div className="space-y-3">
                     <p className="text-[18px]  leading-[20px] font-normal  ">
                        Optimized to handle variations in facial expressions,
                        angles, and natural movements for an effortless user
                        experience.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
