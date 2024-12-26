import Image from "next/image";
export default function TrustedBy() {
   return (
      <section className="lg:space-y-7 space-y-3 my-[50px] lg:my-0  container-padding   max-w-screen-screenPrimary  overflow-clip  w-full mx-auto">
         <div className="text-[24px] text-center font-medium">Trusted By</div>
         <div className="flex items-center justify-between ">
            <Image
               src="/images/MyMobiForce.png"
               alt="MyMobiForce"
               className=" lg:block hidden w-56"
               width={506}
               height={77}
               loading="lazy"
            />
            <Image
               src="/images/OnGrid.png"
               alt="OnGrid"
               className="w-28"
               width={217}
               height={84}
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
            <Image
               src="/images/central.png"
               alt="central"
               className=" lg:block hidden w-32"
               width={123}
               height={35}
               loading="lazy"
            />
         </div>
      </section>
   );
}
