import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals getting started with AI automation",
    features: [
      "Basic AI automation tools",
      "5 automated workflows",
      "Community forum access",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses and teams",
    features: [
      "Advanced AI automation tools",
      "Unlimited workflows",
      "Priority community support",
      "24/7 phone & email support",
      "Team collaboration features",
      "Custom integrations"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring custom solutions",
    features: [
      "Custom AI solutions",
      "Dedicated account manager",
      "Custom SLA",
      "Advanced security features",
      "API access",
      "White-label options",
      "On-premise deployment"
    ]
  }
];

const MembershipTiers = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const handleGetStarted = (tierName: string) => {
    toast.success(`Thank you for your interest in our ${tierName} plan! We'll contact you soon.`);
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
            <div
              key={tier.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 
                ${
                  hoveredTier === tier.name
                    ? "transform scale-105 shadow-2xl"
                    : "shadow-xl"
                }
                ${
                  tier.isPopular
                    ? "border-2 border-primary ring-2 ring-primary/20"
                    : "border border-gray-200"
                }`}
              onMouseEnter={() => setHoveredTier(tier.name)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-gray-600 ml-2">/month</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 transition-transform duration-200 ${
                        hoveredTier === tier.name ? "translate-x-2" : ""
                      }`}
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(tier.name)}
                  className={`group w-full py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      tier.isPopular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                    }`}
                >
                  Get Started
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                    hoveredTier === tier.name ? "translate-x-1" : ""
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;