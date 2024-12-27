import Image from "next/image";
export default function Footer() {
   return (
      <section className="container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto w-full lg:pb-[250px] pb-[24px]   ">
         <div className="md:flex items-center justify-between w-full md:pt-10 pt-4 border-t-2 space-y-2">
            <div className="flex justify-center md:block">
                <a href="/" className="">
               <Image
                  src="/images/logo.png"
                  alt="SpoofSense Footer Logo"
                  width={176.35}
                  height={32.98}
                  className=""
               /></a>
            </div>
            <div className="text-[#AFAFAF] flex items-center justify-around md:justify-center space-x-3">
               <a href="" className="">Privacy Policy</a>

               <a href="" className="">Terms & Conditions</a>
            </div>
         </div>
      </section>
   );
}
