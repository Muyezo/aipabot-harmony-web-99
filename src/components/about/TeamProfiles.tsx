import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";

const teamMembers = [
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square relative overflow-hidden">
              <LazyImage
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                width={400}
                height={400}
                quality={85}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex gap-4">
                <a
                  href={member.social.twitter}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfiles;