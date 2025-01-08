import { useSession } from "@supabase/auth-helpers-react";
import { Suspense, lazy } from "react";
import { useAdmin } from "../hooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/ui/loading-spinner";
import { Skeleton } from "../components/ui/skeleton";
import Footer from "../components/Footer";

const DashboardContent = lazy(() => import("../components/Dashboard"));
const AIChat = lazy(() => import("../components/AIChat"));
const BlogManagement = lazy(() => import("../components/blog/BlogManagement"));

const Dashboard = () => {
  const session = useSession();
  const { isAdmin, isLoading: isAdminLoading } = useAdmin();
  const { toast } = useToast();

  if (isAdminLoading) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
        <LoadingSpinner size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Suspense 
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          }
        >
          <DashboardContent />
        </Suspense>
        
        {isAdminLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-64 w-full" />
          </div>
        ) : isAdmin ? (
          <Suspense 
            fallback={
              <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-64 w-full" />
              </div>
            }
          >
            <>
              <div className="text-white text-sm mb-4">
                Logged in as admin: {session?.user.email}
              </div>
              <BlogManagement />
            </>
          </Suspense>
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
        
        <Suspense 
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-32 w-full" />
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

export default Dashboard;