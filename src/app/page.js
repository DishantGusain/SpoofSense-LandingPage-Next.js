
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center">

      <main className="relative w-full min-h-screen max-w-screen-screenPrimary   md:px-[104px] px-[12px]  overflow-clip">
        <Hero />

        <div className="space-y-7">
          <div className="text-[24px] text-center font-medium">Trusted By</div>
          <div className="flex items-center justify-between ">
            <Image src="/images/MyMobiForce.png" alt="MyMobiForce" className=" md:block hidden" width={236} height={35} />
            <Image src="/images/OnGrid.png" alt="OnGrid" className="" width={110} height={42} />
            <Image src="/images/Bureau.png" alt="Bureau" className="" width={134} height={27} />
            <Image src="/images/dojah.png" alt="dojah" className="" width={80} height={35} />
            <Image src="/images/signzy.png" alt="signzy" className=" md:block hidden" width={127} height={37} />
            <Image src="/images/central.png" alt="central" className=" md:block hidden" width={123} height={35} />
          </div>
        </div>


        <ContactForm />



        <div className="h-screen "></div>
      </main>
    </div>
  );
}
