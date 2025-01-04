import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check current auth status
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        toast({
          title: "Welcome!",
          description: "You have successfully signed in.",
        });
        navigate("/");
      }
    });

    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate, toast]);

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
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container max-w-md mx-auto pt-20 px-4">
        <div className="bg-[#1A1F2C]/90 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-white/20">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome to AipaBOT</h1>
          <SupabaseAuth 
            supabaseClient={supabase} 
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#8f33ec',
                    brandAccent: '#7928ca',
                    inputBackground: '#2A2F3C',
                    inputText: 'white',
                    inputPlaceholder: '#9CA3AF',
                    inputBorder: '#4B5563',
                    inputBorderHover: '#6B7280',
                    inputBorderFocus: '#8B5CF6',
                  },
                },
              },
              className: {
                anchor: 'text-purple-400 hover:text-purple-300',
                button: 'bg-purple-600 hover:bg-purple-700 text-white',
                container: 'text-white',
                divider: 'bg-white/20',
                label: 'text-white',
                loader: 'border-t-purple-600',
                message: 'text-white',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;