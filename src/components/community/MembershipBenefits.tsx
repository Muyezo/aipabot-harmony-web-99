import { motion } from "framer-motion";
import { Shield, Zap, Heart, Trophy, Star, Gift } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Premium Support",
    description: "Get priority access to our expert support team"
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Be the first to try new features and updates"
  },
  {
    icon: Heart,
    title: "Exclusive Content",
    description: "Access member-only resources and tutorials"
  },
  {
    icon: Trophy,
    title: "Recognition Program",
    description: "Earn badges and rewards for your contributions"
  },
  {
    icon: Star,
    title: "Special Events",
    description: "Join exclusive webinars and workshops"
  },
  {
    icon: Gift,
    title: "Member Perks",
    description: "Enjoy discounts on premium services"
  }
];

const MembershipBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Membership Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MembershipBenefits;