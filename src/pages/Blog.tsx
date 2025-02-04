import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSearch from "../components/blog/BlogSearch";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Blog = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: categories } = useQuery({
    queryKey: ['blog-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('category')
        .eq('status', 'published');
      
      if (error) throw error;
      
      const uniqueCategories = new Set(data.map(post => post.category));
      return Array.from(uniqueCategories).sort();
    },
  });

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
    toast({
      title: "Search updated",
      description: "Search filters have been updated",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 content-wrapper"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover insights, tutorials, and updates from our team
              </p>
            </motion.div>
            <BlogSearch 
              onSearch={handleSearch} 
              categories={categories || []} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;