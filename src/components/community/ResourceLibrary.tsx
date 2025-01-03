import { useState } from "react";
import { Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Getting Started with AI",
    description: "A comprehensive guide for beginners",
    category: "Guides",
    type: "PDF"
  },
  {
    id: 2,
    title: "Advanced AI Techniques",
    description: "Deep dive into advanced concepts",
    category: "Technical",
    type: "Video"
  },
  {
    id: 3,
    title: "AI Best Practices",
    description: "Industry-standard best practices",
    category: "Best Practices",
    type: "Article"
  }
];

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value && filteredResources.length === 0) {
      toast({
        title: "No results found",
        description: "Try adjusting your search terms",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Resource Library</h2>
      
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3">
              <BookOpen className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold text-lg">{resource.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {resource.type}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredResources.length === 0 && searchQuery && (
        <div className="text-center py-8 text-gray-500">
          No resources found matching your search.
        </div>
      )}
    </motion.div>
  );
};

export default ResourceLibrary;