import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/Navbar";
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

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
        <div className="grid-overlay" />
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <CallToAction />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Dashboard />
        {isLoading ? (
          <div className="text-white text-center py-4">
            Checking admin status...
          </div>
        ) : isAdmin ? (
          <>
            <div className="text-white text-sm mb-4">
              Logged in as admin: {session.user.email}
            </div>
            <BlogManagement />
          </>
        ) : (
          <div className="text-white text-center py-4">
            Blog management is only available to administrators.
            {session?.user?.email && (
              <div className="mt-2 text-sm text-gray-400">
                Logged in as: {session.user.email}
              </div>
            )}
          </div>
        )}
        <AIChat />
      </div>
    </div>
  );
};

export default Index;