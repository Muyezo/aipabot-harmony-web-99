import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAdmin } from "../hooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
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
  const { isAdmin, isLoading } = useAdmin();
  const { toast } = useToast();

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
        {isAdmin ? (
          <BlogManagement />
        ) : (
          <div className="text-white text-center py-4">
            Blog management is only available to administrators.
          </div>
        )}
        <AIChat />
      </div>
    </div>
  );
};

export default Index;