import { motion } from "framer-motion";
import { Rocket, Target } from "lucide-react";

const CompanyMission = () => {
  return (
    <section className="mb-24">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-lg text-white/80">
            To empower businesses with cutting-edge AI solutions that streamline operations,
            reduce costs, and drive sustainable growth. We're committed to making advanced
            technology accessible and practical for organizations of all sizes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          </div>
          <p className="text-lg text-white/80">
            To be the global leader in AI-powered business transformation, creating a future
            where every organization can harness the full potential of artificial intelligence
            to achieve extraordinary results and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyMission;