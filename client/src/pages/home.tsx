import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import TestimonialSection from "@/components/testimonial-section";
import CommunityDnaSection from "@/components/community-dna-section";
import VideoSection from "@/components/video-section";
import HomeLoansSection from "@/components/home-loans-section";
import FeaturesSection from "@/components/features-section";
import CareersSection from "@/components/careers-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection />
      <TestimonialSection />
      <CommunityDnaSection />
      <VideoSection />
      <HomeLoansSection />
      <FeaturesSection />
      <CareersSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
