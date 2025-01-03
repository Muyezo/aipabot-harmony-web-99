import { Users, BookOpen, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with AI experts and enthusiasts worldwide",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access exclusive tutorials and learning materials",
  },
  {
    icon: Calendar,
    title: "Regular Events",
    description: "Join workshops, webinars, and networking sessions",
  },
];

const CommunitySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">
        Join Our Community
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <benefit.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CommunitySection;