import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "../components/Navbar";
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

  useEffect(() => {
    if (!session) {
      navigate("/auth");
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

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

      <Navbar />
      <Hero />
      <div className="relative z-10">
        <Services />
        <Dashboard />
        <AIChat />
        <CallToAction />
        <TestimonialsCarousel />
        <MembershipTiers />
      </div>
      <Footer />
    </div>
  );
};

export default Index;