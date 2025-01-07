import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession } from "@supabase/auth-helpers-react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { DesktopMenu } from "@/components/navbar/DesktopMenu";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const session = useSession();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  // Listen for auth state changes and errors
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
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

      <div className="flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Welcome Back
          </h1>
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/10">
            <SupabaseAuth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#9b87f5',
                      brandAccent: '#7c6bd6',
                    },
                  },
                },
              }}
              providers={[]}
              view="sign_in"
              localization={{
                variables: {
                  sign_in: {
                    email_label: 'Email',
                    password_label: 'Password',
                    email_input_placeholder: 'Your email',
                    password_input_placeholder: 'Your password',
                    button_label: 'Sign in',
                    loading_button_label: 'Signing in ...',
                  },
                },
              }}
              onAuthError={(error) => {
                console.error('Auth error:', error);
                toast({
                  title: "Authentication Error",
                  description: "Please check your credentials and try again.",
                  variant: "destructive",
                });
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;