import { motion } from "framer-motion";

interface ServiceDetailBenefitsProps {
  benefits: string[];
}

const ServiceDetailBenefits = ({ benefits }: ServiceDetailBenefitsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#F1F1F1] bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-[#9b87f5] border-opacity-20"
    >
      <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">Benefits</h2>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-[#8E9196]">
            <div className="w-2 h-2 bg-[#7E69AB] rounded-full mr-3" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceDetailBenefits;