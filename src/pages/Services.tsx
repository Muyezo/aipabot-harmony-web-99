import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceGrid from "../components/services/ServiceGrid";
import { useToast } from "@/components/ui/use-toast";

const Services = () => {
  const { toast } = useToast();

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
              <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover how our AI solutions can transform your business operations
              </p>
            </motion.div>
            <div className="content-wrapper">
              <ServiceGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;