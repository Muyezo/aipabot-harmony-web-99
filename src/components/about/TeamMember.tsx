import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  index: number;
}

const TeamMember = ({ name, role, image, bio, social, index }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-square relative overflow-hidden">
        <LazyImage
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={400}
          height={400}
          quality={85}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex gap-4">
          <a
            href={social.twitter}
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label={`${name}'s Twitter`}
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={social.linkedin}
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={social.github}
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label={`${name}'s GitHub`}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;