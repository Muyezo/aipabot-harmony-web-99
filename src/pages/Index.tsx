import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import { Dashboard } from "../components/Dashboard";
import { AIChat } from "../components/AIChat";
import BlogManagement from "../components/blog/BlogManagement";

const Index = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/auth");
    }
  }, [session, navigate]);

  if (!session) {
    return (
      <>
        <Hero />
        <Services />
        <Testimonials />
        <CallToAction />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Dashboard />
        <BlogManagement />
        <AIChat />
      </div>
    </div>
  );
};

export default Index;