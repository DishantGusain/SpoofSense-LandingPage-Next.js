
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HowSpoofSenseWorks from "@/components/HowSpoofSenseWorks";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center">

      <main className="relative w-full min-h-screen max-w-screen-screenPrimary   md:px-[104px] px-[12px]  overflow-clip">
        <Hero />

        <div className="md:space-y-7 space-y-3 my-[50px] md:my-0">
          <div className="text-[24px] text-center font-medium">Trusted By</div>
          <div className="flex items-center justify-between ">
            <Image src="/images/MyMobiForce.png" alt="MyMobiForce" className=" md:block hidden w-56" width={506} height={77} loading="lazy" />
            <Image src="/images/OnGrid.png" alt="OnGrid" className="w-28" width={217} height={84} loading="lazy" />
            <Image src="/images/Bureau.png" alt="Bureau" className="w-32" width={134} height={27} loading="lazy" />
            <Image src="/images/dojah.png" alt="dojah" className="w-20" width={80} height={35} loading="lazy" />
            <Image src="/images/signzy.png" alt="signzy" className=" md:block hidden w-32" width={127} height={37} loading="lazy" />
            <Image src="/images/central.png" alt="central" className=" md:block hidden w-32" width={123} height={35} loading="lazy" />
          </div>
        </div>


        <ContactForm />

        <HowSpoofSenseWorks/>



        <div className="h-screen flex items-center justify-center"> Work in progress</div>
      </main>
    </div>
  );
}
