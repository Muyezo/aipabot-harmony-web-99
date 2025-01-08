import { motion } from "framer-motion";

interface ServiceDetailHeaderProps {
  title: string;
  description: string;
  longDescription: string;
}

const ServiceDetailHeader = ({ title, description, longDescription }: ServiceDetailHeaderProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-200">{description}</p>
      </motion.div>

      <div className="bg-card rounded-xl shadow-lg p-8 mt-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
        <p className="text-gray-200">{longDescription}</p>
      </div>
    </>
  );
};

export default ServiceDetailHeader;