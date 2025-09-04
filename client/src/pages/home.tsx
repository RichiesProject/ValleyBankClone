import ScamAlertBanner from "@/components/scam-alert-banner";
import AnniversaryBanner from "@/components/anniversary-banner";
import NavigationHeader from "@/components/navigation-header";
import MobileAppSection from "@/components/mobile-app-section";
import HeroSection from "@/components/hero-section";
import HomeLoansSection from "@/components/home-loans-section";
import FeaturesSection from "@/components/features-section";
import CareersSection from "@/components/careers-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScamAlertBanner />
      <AnniversaryBanner />
      <NavigationHeader />
      <MobileAppSection />
      <HeroSection />
      <HomeLoansSection />
      <FeaturesSection />
      <CareersSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
