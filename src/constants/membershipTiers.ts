import { Tier } from "../types/membership";

export const tiers: Tier[] = [
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