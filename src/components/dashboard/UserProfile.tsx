import { Card } from "@/components/ui/card";

interface Profile {
  username: string;
  full_name: string;
  avatar_url: string;
}

interface UserProfileProps {
  profile: Profile | null;
}

const UserProfile = ({ profile }: UserProfileProps) => {
  return (
    <Card className="w-full p-6 mb-8 bg-[#1A1F2C]/80 backdrop-blur-lg border-white/10">
      <div className="flex items-center space-x-4">
        {profile?.avatar_url && (
          <img
            src={profile.avatar_url}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {profile?.full_name || "User"}
          </h3>
          {profile?.username && (
            <p className="text-white/60">@{profile.username}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;