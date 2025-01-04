import { motion } from "framer-motion";
import TeamGrid from "./TeamGrid";
import { TeamMemberType } from "@/types/team";

const teamMembers: TeamMemberType[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
    bio: "With over 15 years in AI and machine learning, Sarah leads our vision for AI-powered business transformation.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
    bio: "A pioneer in AI development with a passion for creating scalable, innovative solutions.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
    bio: "Emily brings products to life by combining user-centered design with cutting-edge AI technology.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

const TeamProfiles = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Meet the innovative minds behind our AI solutions
        </p>
      </motion.div>
      <TeamGrid members={teamMembers} />
    </section>
  );
};

export default TeamProfiles;