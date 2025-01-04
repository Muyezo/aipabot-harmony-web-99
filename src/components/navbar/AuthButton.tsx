import { useNavigate } from "react-router-dom";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useToast } from "@/components/ui/use-toast";
import { LogIn, LogOut } from "lucide-react";

export const AuthButton = () => {
  const navigate = useNavigate();
  const session = useSession();
  const supabase = useSupabaseClient();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    }
  };

  if (session) {
    return (
      <button
        onClick={handleSignOut}
        className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm inline-flex items-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        Sign Out
      </button>
    );
  }

  return (
    <button
      onClick={() => navigate("/auth")}
      className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm inline-flex items-center gap-2"
    >
      <LogIn className="w-4 h-4" />
      Sign In
    </button>
  );
};