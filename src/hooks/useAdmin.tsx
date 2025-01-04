import { useQuery } from "@tanstack/react-query";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";

export const useAdmin = () => {
  const session = useSession();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["admin-status", session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session?.user?.id)
        .eq("role", "admin")
        .single();

      if (error) {
        console.error("Error checking admin status:", error);
        return false;
      }

      return !!data;
    },
    enabled: !!session?.user?.id,
  });

  return { isAdmin: !!isAdmin, isLoading };
};