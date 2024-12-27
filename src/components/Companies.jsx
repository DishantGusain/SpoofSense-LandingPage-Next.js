import Image from "next/image";
export default function Companies() {
   return (
      <section className=" container-padding max-w-screen-screenPrimary  overflow-clip  mx-auto w-full   lg:my-[68px] my-[30px] ">
         <div className="flex items-center justify-between  px-[156px]">
            <Image
               src="/images/MyMobiForce.png"
               alt="MyMobiForce"
               className=" lg:block hidden w-56"
               width={506}
               height={77}
               loading="lazy"
            />
            <Image
               src="/images/Bureau.png"
               alt="Bureau"
               className="w-32"
               width={134}
               height={27}
               loading="lazy"
            />
            <Image
               src="/images/dojah.png"
               alt="dojah"
               className="w-20"
               width={80}
               height={35}
               loading="lazy"
            />
            <Image
               src="/images/signzy.png"
               alt="signzy"
               className=" lg:block hidden w-32"
               width={127}
               height={37}
               loading="lazy"
            />
         </div>
      </section>
   );
}
