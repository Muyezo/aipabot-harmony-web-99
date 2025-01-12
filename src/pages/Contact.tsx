import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import SupportChannels from "../components/contact/SupportChannels";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Get in touch with our team. We're here to help you succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto mb-16"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white text-center">Send us a Message</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="content-wrapper mb-16"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                Support Channels
              </h2>
              <SupportChannels />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;