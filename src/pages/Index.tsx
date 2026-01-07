import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientTrustBar from "@/components/ClientTrustBar";
import HighlightsSection from "@/components/HighlightsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingChat from "@/components/FloatingChat";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.title = "ZiptoCode Tech Solution | Web Development & IT Automation";
    
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    // Disable keyboard shortcuts for copying
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'u' || e.key === 's')) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientTrustBar />
        <HighlightsSection />
        <ServicesSection />
        <WhyChooseUs />
        <StatsSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <TeamSection />
        <FAQSection />
        <BlogSection />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop isChatOpen={isChatOpen} />
      <FloatingWhatsApp isChatOpen={isChatOpen} />
      <FloatingChat onChatStateChange={setIsChatOpen} />
    </div>
  );
};

export default Index;
