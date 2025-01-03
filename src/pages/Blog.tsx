import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSearch from "../components/blog/BlogSearch";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    toast({
      title: "Search initiated",
      description: `Searching for: ${query}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover insights, tutorials, and updates from our team
              </p>
            </motion.div>
            <BlogSearch onSearch={handleSearch} />
            <BlogGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;