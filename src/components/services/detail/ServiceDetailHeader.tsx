import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceDetailHeaderProps {
  title: string;
  description: string;
  longDescription: string;
}

const ServiceDetailHeader = ({ title, description, longDescription }: ServiceDetailHeaderProps) => {
  return (
    <>
      <div className="mb-8">
        <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-200">{description}</p>
      </motion.div>

      <div className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-8 mt-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
        <p className="text-gray-200">{longDescription}</p>
      </div>
    </>
  );
};

export default ServiceDetailHeader;