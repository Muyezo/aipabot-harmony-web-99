import { useState } from "react";
import { tiers } from "../constants/membershipTiers";
import MembershipCard from "./membership/MembershipCard";

interface MembershipTiersProps {
  onGetStarted?: (tierName: string) => void;
}

const MembershipTiers = ({ onGetStarted }: MembershipTiersProps) => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const handleGetStarted = (tierName: string) => {
    if (onGetStarted) {
      onGetStarted(tierName);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Membership
          </h2>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <MembershipCard
              key={tier.name}
              tier={tier}
              isHovered={hoveredTier === tier.name}
              onMouseEnter={() => setHoveredTier(tier.name)}
              onMouseLeave={() => setHoveredTier(null)}
              onGetStarted={handleGetStarted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;