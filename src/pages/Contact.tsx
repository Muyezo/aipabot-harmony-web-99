import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocations from "../components/contact/OfficeLocations";
import SupportChannels from "../components/contact/SupportChannels";
import CommunitySection from "../components/community/CommunitySection";
import SuccessStories from "../components/community/SuccessStories";
import EventCalendar from "../components/community/EventCalendar";
import ResourceLibrary from "../components/community/ResourceLibrary";

const Contact = () => {
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get in touch with our team. We're here to help you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <ContactForm />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
                <OfficeLocations />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Support Channels
              </h2>
              <SupportChannels />
            </motion.div>

            <CommunitySection />
            <SuccessStories />
            <EventCalendar />
            <ResourceLibrary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;