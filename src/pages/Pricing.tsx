import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipTiers from "../components/MembershipTiers";
import { useToast } from "@/components/ui/use-toast";

const Pricing = () => {
  const { toast } = useToast();

  const handleGetStarted = (tierName: string) => {
    toast({
      title: "Thank you for your interest!",
      description: `We'll contact you shortly about the ${tierName} plan.`,
    });
  };

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
                Pricing Plans
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </motion.div>
            <MembershipTiers onGetStarted={handleGetStarted} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;