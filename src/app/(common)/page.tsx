import AboutSection from "./_components/about/AboutSection";
import CampaignsSection from "./_components/CampaignsSection/CampaignsSection";
import HeroSection from "./_components/heroSection/HeroSection";
import ImpactMetricsSection from "./_components/impactMetricsSection/ImpactMetricsSection";
import NewsletterSection from "./_components/newsLetter/NewsLetterSection";
import NewsSection from "./_components/newsSection/NewsSection";
import TestimonialsSection from "./_components/testimonialSection/TestimonialSection";
import TrustedPartners from "./_components/trustedPartners/TrustedPartners";
import VolunteerCTA from "./_components/VolunteerCTA/VolunteerCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedPartners />
      <AboutSection />
      <ImpactMetricsSection />
      <CampaignsSection />
      <NewsSection />
      <TestimonialsSection />
      <VolunteerCTA />
      <NewsletterSection />
    </>
  );
}
