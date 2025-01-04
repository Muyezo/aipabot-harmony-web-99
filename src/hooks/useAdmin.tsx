import { useQuery } from "@tanstack/react-query";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";

export const useAdmin = () => {
  const session = useSession();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["admin-status", session?.user?.id],
    queryFn: async () => {
      console.log("Checking admin status for user:", session?.user?.id);
      
      const { data, error } = await supabase
        .from("user_roles")
        .select("*")
        .eq("user_id", session?.user?.id)
        .eq("role", "admin")
        .single();

      if (error) {
        console.error("Error checking admin status:", error);
        return false;
      }

      console.log("Admin check result:", data);
      return !!data;
    },
    enabled: !!session?.user?.id,
  });

  return { isAdmin: !!isAdmin, isLoading };
};