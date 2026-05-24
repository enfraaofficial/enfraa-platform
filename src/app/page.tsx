import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Showcase from "@/components/Showcase";
import DashboardPreview from "@/components/DashboardPreview";
import FeaturesGrid from "@/components/FeaturesGrid";
import InvestorSection from "@/components/InvestorSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-primary-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Badge Section */}
      <Trust />

      {/* Core Products Showcase */}
      <Showcase />

      {/* Cinematic Live Dashboard Area */}
      <DashboardPreview />

      {/* Comprehensive Features Grid */}
      <FeaturesGrid />

      {/* Region Showcase / Investor Spotlight */}
      <InvestorSection />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Pricing Comparison Matrix */}
      <Pricing />

      {/* Lead capture / Final Call To Action */}
      <FinalCTA />

      {/* Footer & Meta Info */}
      <Footer />
    </div>
  );
}
