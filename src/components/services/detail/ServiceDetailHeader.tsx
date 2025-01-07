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
        <Link to="/services" className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
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
        <h1 className="text-4xl font-bold text-[#9b87f5] mb-4">{title}</h1>
        <p className="text-xl text-[#8E9196]">{description}</p>
      </motion.div>

      <div className="bg-[#F1F1F1] bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-8 mt-8 border border-[#9b87f5] border-opacity-20">
        <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">Overview</h2>
        <p className="text-[#8E9196]">{longDescription}</p>
      </div>
    </>
  );
};

export default ServiceDetailHeader;