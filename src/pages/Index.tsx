import { useSession } from "@supabase/auth-helpers-react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import { Dashboard } from "../components/Dashboard";
import { AIChat } from "../components/AIChat";
import BlogManagement from "../components/blog/BlogManagement";

const Index = () => {
  const session = useSession();

  return (
    <div className="min-h-screen">
      {session ? (
        <div className="container mx-auto px-4 py-8 space-y-8">
          <Dashboard />
          <BlogManagement />
          <AIChat />
        </div>
      ) : (
        <>
          <Hero />
          <Services />
          <Testimonials />
          <CallToAction />
        </>
      )}
    </div>
  );
};

export default Index;