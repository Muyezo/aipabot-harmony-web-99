import { motion } from "framer-motion";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries to create cutting-edge AI solutions"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Building reliable and secure AI systems with transparency"
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Making a positive difference in how businesses operate"
  }
];

const CompanyValues = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          The principles that guide our mission and shape our culture
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <value.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyValues;