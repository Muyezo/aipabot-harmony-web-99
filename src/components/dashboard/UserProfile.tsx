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
  profile: Profile | null;
}

const UserProfile = ({ profile }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: profile?.username || "",
    full_name: profile?.full_name || "",
    avatar_url: profile?.avatar_url || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const session = useSession();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!session?.user?.id) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          username: formData.username,
          full_name: formData.full_name,
          avatar_url: formData.avatar_url,
        })
        .eq("id", session.user.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your profile has been updated.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update your profile. Please try again.",
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
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white/60 mb-1">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  className="max-w-xs"
                />
              </div>
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-white/60 mb-1">
                  Full Name
                </label>
                <Input
                  id="full_name"
                  name="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="max-w-xs"
                />
              </div>
              <div>
                <label htmlFor="avatar_url" className="block text-sm font-medium text-white/60 mb-1">
                  Avatar URL
                </label>
                <Input
                  id="avatar_url"
                  name="avatar_url"
                  type="text"
                  value={formData.avatar_url}
                  onChange={handleInputChange}
                  placeholder="Enter your avatar URL"
                  className="max-w-xs"
                />
              </div>
              <div className="space-x-2 pt-2">
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
                    setFormData({
                      username: profile?.username || "",
                      full_name: profile?.full_name || "",
                      avatar_url: profile?.avatar_url || "",
                    });
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
                  Edit Profile
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