import { useSession } from "@supabase/auth-helpers-react";
import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AutoScrollCarousel from "../components/AutoScrollCarousel";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/ui/loading-spinner";
import { Skeleton } from "../components/ui/skeleton";

const Dashboard = lazy(() => import("../components/Dashboard"));
const AIChat = lazy(() => import("../components/AIChat"));
const BlogManagement = lazy(() => import("../components/blog/BlogManagement"));

const Index = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { isAdmin, isLoading: isAdminLoading } = useAdmin();
  const { toast } = useToast();

  if (isAdminLoading) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
        <LoadingSpinner size={32} />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
        <div className="grid-overlay" />
        <Navbar />
        <main className="flex-grow">
          <div className="space-y-8 md:space-y-16 px-4 md:px-0">
            <Hero />
            <Services />
            <AutoScrollCarousel />
            <Testimonials />
            <CallToAction />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8 space-y-4 md:space-y-8">
        <Suspense 
          fallback={
            <div className="space-y-2 md:space-y-4">
              <Skeleton className="h-24 md:h-32 w-full" />
              <Skeleton className="h-48 md:h-64 w-full" />
            </div>
          }
        >
          <Dashboard />
        </Suspense>
        
        {isAdminLoading ? (
          <div className="space-y-2 md:space-y-4">
            <Skeleton className="h-6 md:h-8 w-32 md:w-48" />
            <Skeleton className="h-48 md:h-64 w-full" />
          </div>
        ) : isAdmin ? (
          <Suspense 
            fallback={
              <div className="space-y-2 md:space-y-4">
                <Skeleton className="h-6 md:h-8 w-32 md:w-48" />
                <Skeleton className="h-48 md:h-64 w-full" />
              </div>
            }
          >
            <>
              <div className="text-white text-sm mb-2 md:mb-4">
                Logged in as admin: {session.user.email}
              </div>
              <BlogManagement />
            </>
          </Suspense>
        ) : (
          <div className="text-white text-center py-2 md:py-4">
            Blog management is only available to administrators.
            {session?.user?.email && (
              <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">
                Logged in as: {session.user.email}
              </div>
            )}
          </div>
        )}
        
        <Suspense 
          fallback={
            <div className="space-y-2 md:space-y-4">
              <Skeleton className="h-24 md:h-32 w-full" />
            </div>
          }
        >
          <AIChat />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Index;