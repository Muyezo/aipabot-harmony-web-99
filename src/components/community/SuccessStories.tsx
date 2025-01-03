import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    role: "AI Developer",
    story: "AipaBOT helped me automate my workflow and increase productivity by 300%.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    story: "Implementing AipaBOT's solutions transformed our customer service operations.",
    image: "/placeholder.svg",
  },
];

const SuccessStories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <UserRound className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{story.name}</h3>
                <p className="text-gray-600">{story.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">&ldquo;{story.story}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessStories;