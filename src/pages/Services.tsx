import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceGrid from "../components/services/ServiceGrid";
import { useToast } from "@/components/ui/use-toast";

const Services = () => {
  const { toast } = useToast();

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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how our AI solutions can transform your business operations
              </p>
            </motion.div>
            <ServiceGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;