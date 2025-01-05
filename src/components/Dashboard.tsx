import { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import UserProfile from "./dashboard/UserProfile";
import AIInteractionsList from "./dashboard/AIInteractionsList";

interface Profile {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string;
}

interface AIInteraction {
  prompt: string;
  response: string;
  created_at: string;
  model: string;
  tokens_used: number;
}

const Dashboard = () => {
  const session = useSession();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [interactions, setInteractions] = useState<AIInteraction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!session?.user) return;

      try {
        // Fetch user profile
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("id, username, full_name, avatar_url")
          .eq("id", session.user.id)
          .single();

        if (profileError) throw profileError;
        setProfile(profileData);

        // Fetch AI interactions
        const { data: interactionsData, error: interactionsError } = await supabase
          .from("ai_interactions")
          .select("*")
          .eq("user_id", session.user.id)
          .order("created_at", { ascending: false })
          .limit(5);

        if (interactionsError) throw interactionsError;
        setInteractions(interactionsData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();

    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'ai_interactions',
          filter: `user_id=eq.${session?.user?.id}`,
        },
        async (payload) => {
          console.log('Real-time update:', payload);
          
          // Fetch latest interactions after any change
          const { data, error } = await supabase
            .from("ai_interactions")
            .select("*")
            .eq("user_id", session?.user?.id)
            .order("created_at", { ascending: false })
            .limit(5);

          if (!error && data) {
            setInteractions(data);
            toast({
              title: "Update",
              description: "AI interactions have been updated in real-time.",
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session, toast]);

  if (isLoading) {
    return (
      <div className="w-full py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-white/5 rounded w-1/3"></div>
            <div className="h-32 bg-white/5 rounded"></div>
            <div className="h-64 bg-white/5 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>
        <UserProfile profile={profile} />
        <AIInteractionsList interactions={interactions} />
      </div>
    </section>
  );
};

export default Dashboard;