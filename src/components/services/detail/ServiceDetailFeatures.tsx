import { motion } from "framer-motion";

interface ServiceDetailFeaturesProps {
  features: string[];
}

const ServiceDetailFeatures = ({ features }: ServiceDetailFeaturesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-xl shadow-lg p-8 border border-white/10"
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-200">
            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceDetailFeatures;