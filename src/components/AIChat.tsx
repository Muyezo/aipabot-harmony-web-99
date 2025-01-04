import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to use the AI chat feature.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-chat", {
        body: { prompt, userId: session.user.id },
      });

      if (error) throw error;

      toast({
        title: "AI Response",
        description: data.response,
        duration: null, // This makes the toast stay until manually closed
      });
      setPrompt("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          AI Assistant Chat
        </h2>
        <Card className="w-full mx-auto p-6 space-y-4 bg-[#1A1F2C]/80 backdrop-blur-lg border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask me anything..."
              className="min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            <Button 
              type="submit" 
              disabled={isLoading || !prompt.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {isLoading ? "Processing..." : "Send"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AIChat;
