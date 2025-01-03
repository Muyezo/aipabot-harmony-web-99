import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunitySection from "../components/community/CommunitySection";
import MembershipBenefits from "../components/community/MembershipBenefits";
import SuccessStories from "../components/community/SuccessStories";
import EventBooking from "../components/community/EventBooking";
import EventCalendar from "../components/community/EventCalendar";
import ResourceLibrary from "../components/community/ResourceLibrary";
import ForumSection from "../components/community/ForumSection";

const CommunityHub = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <main className="flex-grow">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Community Hub
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join our thriving community of AI enthusiasts and professionals.
              </p>
            </motion.div>
            <div className="space-y-16">
              <div className="content-wrapper">
                <CommunitySection />
              </div>
              <div className="content-wrapper">
                <MembershipBenefits />
              </div>
              <div className="content-wrapper">
                <SuccessStories />
              </div>
              <div className="content-wrapper">
                <EventBooking />
              </div>
              <div className="content-wrapper">
                <EventCalendar />
              </div>
              <div className="content-wrapper">
                <ResourceLibrary />
              </div>
              <div className="content-wrapper">
                <ForumSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityHub;