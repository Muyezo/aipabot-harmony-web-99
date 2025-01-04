import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#1A1F2C]">
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
          />
        </Card>
      </div>
    </div>
  );
};

export default Auth;