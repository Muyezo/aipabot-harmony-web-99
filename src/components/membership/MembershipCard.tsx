import { Check, ChevronRight } from "lucide-react";
import { Tier } from "../../types/membership";

interface MembershipCardProps {
  tier: Tier;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onGetStarted: (tierName: string) => void;
}

const MembershipCard = ({
  tier,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onGetStarted,
}: MembershipCardProps) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 bg-[#1A1F2C] 
        ${isHovered ? "transform scale-105 shadow-2xl" : "shadow-xl"}
        ${
          tier.isPopular
            ? "border-2 border-primary ring-2 ring-primary/20"
            : "border border-gray-200/20"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {tier.isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce">
          Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-white">{tier.price}</span>
          {tier.price !== "Custom" && (
            <span className="text-gray-300 ml-2">/month</span>
          )}
        </div>
        <p className="text-gray-300 mb-6">{tier.description}</p>
        <ul className="space-y-4 mb-8">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-3 transition-transform duration-200 ${
                isHovered ? "translate-x-2" : ""
              }`}
            >
              <Check className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onGetStarted(tier.name)}
          className={`group w-full py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2
            ${
              tier.isPopular
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white/10 text-white border-2 border-primary hover:bg-primary hover:text-white"
            }`}
        >
          Get Started
          <ChevronRight
            className={`h-4 w-4 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;