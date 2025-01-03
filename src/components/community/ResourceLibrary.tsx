import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Getting Started Guide",
    type: "Documentation",
    icon: FileText,
    description: "Complete guide to getting started with our AI tools",
    downloadUrl: "#",
  },
  {
    title: "Video Tutorials",
    type: "Video",
    icon: Video,
    description: "Step-by-step video guides for common use cases",
    downloadUrl: "#",
  },
  {
    title: "Best Practices",
    type: "Guide",
    icon: BookOpen,
    description: "Learn the best practices for AI implementation",
    downloadUrl: "#",
  },
];

const ResourceLibrary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Resource Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <resource.icon className="h-12 w-12 text-primary mb-4" />
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {resource.type}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => window.open(resource.downloadUrl, "_blank")}
            >
              <Download className="h-4 w-4" />
              Access Resource
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceLibrary;