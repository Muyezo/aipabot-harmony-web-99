import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CompanyMission from "../components/about/CompanyMission";
import TeamProfiles from "../components/about/TeamProfiles";
import CompanyValues from "../components/about/CompanyValues";
import CompanyTimeline from "../components/about/CompanyTimeline";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our journey in revolutionizing business operations through AI innovation
          </p>
        </motion.div>

        <CompanyMission />
        <TeamProfiles />
        <CompanyValues />
        <CompanyTimeline />
      </div>
    </div>
  );
};

export default About;