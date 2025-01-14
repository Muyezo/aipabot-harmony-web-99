import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession } from "@supabase/auth-helpers-react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { AuthError, AuthApiError } from "@supabase/supabase-js";

const Auth = () => {
  const session = useSession();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/');
      }
      if (event === 'USER_UPDATED') {
        const { error } = await supabase.auth.getSession();
        if (error) {
          setErrorMessage(getErrorMessage(error));
        }
      }
      if (event === 'SIGNED_OUT') {
        setErrorMessage(""); // Clear errors on sign out
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const getErrorMessage = (error: AuthError) => {
    if (error instanceof AuthApiError) {
      switch (error.code) {
        case 'invalid_credentials':
          return 'Invalid email or password. Please check your credentials and try again.';
        case 'email_not_confirmed':
          return 'Please verify your email address before signing in.';
        case 'user_not_found':
          return 'No user found with these credentials.';
        case 'invalid_grant':
          return 'Invalid login credentials.';
        default:
          return error.message;
      }
    }
    return error.message;
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <div className="flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Welcome Back
          </h1>
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/10">
            {errorMessage && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            <SupabaseAuth
              supabaseClient={supabase}
              view="sign_in"
              showLinks={false}
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
    </div>
  );
};

export default Auth;