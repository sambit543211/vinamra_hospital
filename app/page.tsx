import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Specialities from "@/components/Specialities";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorsPreview from "@/components/DoctorsPreview";
import InsuranceMarquee from "@/components/InsuranceMarquee";
import Testimonials from "@/components/Testimonials";
import EmergencyCTA from "@/components/EmergencyCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Specialities limit={8} />
      <WhyChooseUs />
      <DoctorsPreview limit={3} />
      <InsuranceMarquee />
      <Testimonials />
      <EmergencyCTA />
    </>
  );
}
