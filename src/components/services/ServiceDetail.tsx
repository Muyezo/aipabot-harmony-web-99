import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServiceDetailHeader from "./detail/ServiceDetailHeader";
import ServiceDetailFeatures from "./detail/ServiceDetailFeatures";
import ServiceDetailBenefits from "./detail/ServiceDetailBenefits";
import ServiceImage from "./detail/ServiceImage";
import { services } from "@/data/services";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  const getServiceTitle = () => {
    if (serviceId === 'intelligent-customer-service') {
      return "Win Every Customer with Outstanding Service";
    }
    if (serviceId === 'ai-appointment-agent') {
      return "Turn Missed Calls Into Booked Appointments";
    }
    if (serviceId === 'ai-sales-agent') {
      return "Turn Leads Into Loyal Customers, Effortlessly";
    }
    return "Transform Your Customer Experience Today";
  };

  const getServiceSubtext = () => {
    if (serviceId === 'intelligent-customer-service') {
      return "Don't let your customers walk away... Empower your contact center with AI Agents that deliver lightning-fast, personalized, and unforgettable service they'll love and stay for!";
    }
    if (serviceId === 'ai-appointment-agent') {
      return "Seize every opportunity with AI Appointment Voice Agents. that engage customers instantly, book appointments seamlessly, and ensure your calendar stays busy... keeps your clients coming back for more.!";
    }
    if (serviceId === 'ai-sales-agent') {
      return "Unlock more sales with AI Customer Acquisition Agents that work around the clock, nurturing leads and closing deals with precision and speed.";
    }
    return "Elevate your customer service to new heights. Our AI-powered solutions ensure every interaction builds loyalty, delivering the seamless, responsive experience your customers expect in today's digital world.";
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col relative"
    >
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <motion.main 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-grow pt-20"
      >
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <ServiceDetailHeader
              title={service.title}
              description={service.description}
              longDescription={service.longDescription}
            />
            
            {service.image && (
              <ServiceImage image={service.image} title={service.title} />
            )}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-16 mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {getServiceTitle()}
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                {getServiceSubtext()}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceDetailFeatures features={service.features} />
              <ServiceDetailBenefits benefits={service.benefits} />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Link to="/request-demo">
                <button className="px-8 py-3 border-2 border-[#3f80f6] text-white rounded-full hover:bg-[#3f80f6] hover:text-white transition-colors duration-200 bg-white/10 backdrop-blur-sm">
                  Request A Demo
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default ServiceDetail;