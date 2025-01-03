import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize business operations through AI"
  },
  {
    year: "2021",
    title: "First Major Product Launch",
    description: "Released our flagship AI automation platform"
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in Europe and Asia to serve international clients"
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for AI innovation and customer satisfaction"
  }
];

const CompanyTimeline = () => {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The key milestones that have shaped our growth
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative grid grid-cols-2 gap-8 mb-12 last:mb-0 ${
              index % 2 === 0 ? "" : "direction-rtl"
            }`}
          >
            <div
              className={`flex ${
                index % 2 === 0 ? "justify-end" : "col-start-2"
              }`}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold text-primary">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-6" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;