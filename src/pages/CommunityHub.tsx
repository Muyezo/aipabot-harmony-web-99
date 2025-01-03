import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunitySection from "../components/community/CommunitySection";
import SuccessStories from "../components/community/SuccessStories";
import EventCalendar from "../components/community/EventCalendar";
import ResourceLibrary from "../components/community/ResourceLibrary";
import MembershipBenefits from "../components/community/MembershipBenefits";
import EventBooking from "../components/community/EventBooking";
import ForumSection from "../components/community/ForumSection";

const CommunityHub = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Community Hub
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our thriving community of AI enthusiasts and professionals.
              </p>
            </motion.div>

            <CommunitySection />
            <MembershipBenefits />
            <SuccessStories />
            <EventBooking />
            <EventCalendar />
            <ResourceLibrary />
            <ForumSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityHub;