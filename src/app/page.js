
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import HowSpoofSenseWorks from "@/components/HowSpoofSenseWorks";
import SpoofingAttackCoverage from "@/components/SpoofingAttackCoverage";
import Testimonial from "@/components/Testimonial";
import TrustedBy from "@/components/TrustedBy";
import UnmatchedAccuracy from "@/components/UnmatchedAccuracy";

export default function Home() {
  return (
    <div className=" relative w-full min-h-screen flex flex-col justify-center ">


      <Hero />
      <TrustedBy />

      <ContactForm />

      <HowSpoofSenseWorks />

      <SpoofingAttackCoverage />
      <UnmatchedAccuracy />

<Testimonial/>







      <div className="h-screen flex items-center justify-center"> Work in progress</div>
    </div>
  );
}
