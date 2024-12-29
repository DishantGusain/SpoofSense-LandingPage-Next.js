
import Companies from "@/components/Companies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FooterNavlinks from "@/components/FooterNavlinks";
import Hero from "@/components/Hero";
import HowSpoofSenseWorks from "@/components/HowSpoofSenseWorks";
import IntegrationDeployment from "@/components/IntegrationDeployment";
import ReadyToFightIdentityFraud from "@/components/ReadyToFightIdentityFraud";
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

      <Testimonial />


<IntegrationDeployment/>

      <ReadyToFightIdentityFraud />

      <Companies />


      <FooterNavlinks />
      <Footer />

    </div>
  );
}
