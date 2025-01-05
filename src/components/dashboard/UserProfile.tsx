import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "@supabase/auth-helpers-react";

interface Profile {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string;
}

interface UserProfileProps {
  profile: Profile;
}

const UserProfile = ({ profile }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const session = useSession();

  const handleSave = async () => {
    if (!session?.user?.id) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ full_name: fullName })
        .eq("id", session.user.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your full name has been updated.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update your full name. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full p-6 mb-8 bg-[#1A1F2C]/80 backdrop-blur-lg border-white/10">
      <div className="flex items-center space-x-4">
        {profile?.avatar_url && (
          <img
            src={profile.avatar_url}
            alt={profile?.full_name || "User avatar"}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-2">
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="max-w-xs"
              />
              <div className="space-x-2">
                <Button 
                  onClick={handleSave} 
                  disabled={isLoading}
                  size="sm"
                >
                  {isLoading ? "Saving..." : "Save"}
                </Button>
                <Button 
                  onClick={() => {
                    setIsEditing(false);
                    setFullName(profile?.full_name || "");
                  }}
                  variant="outline"
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                {profile?.full_name || "User"}
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2"
                >
                  Edit
                </Button>
              </h3>
              {profile?.username && (
                <p className="text-white/60">@{profile.username}</p>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;