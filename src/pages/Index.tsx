import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { DesktopMenu } from "../components/navbar/DesktopMenu";
import { MobileMenu } from "../components/navbar/MobileMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { AIChat } from "../components/AIChat";
import { Dashboard } from "../components/Dashboard";
import CallToAction from "../components/CallToAction";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import MembershipTiers from "../components/MembershipTiers";
import Footer from "../components/Footer";

const Index = () => {
  const session = useSession();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background gradient and effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#1A1F2C]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#221F26] via-[#9b87f5] to-[#F97316] animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9] via-[#8B5CF6] to-transparent animate-gradient-y"></div>
            <div className="absolute inset-0 bg-[linear-gradient(40deg,#0EA5E9,#D946EF,#F97316)] opacity-40 animate-aurora"></div>
          </div>
        </div>
        {/* Glowing orbs */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        {/* Grid overlay */}
        <div className="grid-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl cursor-pointer" onClick={() => navigate("/")}>Your Logo</div>
            <DesktopMenu />
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      </nav>

      <div className="pt-20">
        <Hero />
        <div className="relative z-10">
          <Services />
          {session ? (
            <>
              <Dashboard />
              <AIChat />
            </>
          ) : null}
          <CallToAction />
          <TestimonialsCarousel />
          <MembershipTiers />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;