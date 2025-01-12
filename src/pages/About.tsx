import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyMission from "../components/about/CompanyMission";
import CompanyValues from "../components/about/CompanyValues";
import CompanyTimeline from "../components/about/CompanyTimeline";
import MeetAipaBot from "../components/about/MeetAipaBot";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 content-wrapper"
            >
              <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover our journey in revolutionizing business operations through AI innovation
              </p>
            </motion.div>

            <div className="space-y-24">
              <CompanyMission />
              <MeetAipaBot />
              <CompanyValues />
              <CompanyTimeline />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;