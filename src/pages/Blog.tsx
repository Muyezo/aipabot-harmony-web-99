import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSearch from "../components/blog/BlogSearch";
import RelatedPosts from "../components/blog/RelatedPosts";
import { blogPosts } from "../constants/blogPosts";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(post => post.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "" || 
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
    toast({
      title: "Search updated",
      description: `Found ${filteredPosts.length} matching posts`,
    });
  };

  const currentPost = blogPosts[0];

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
            <div className="space-y-12">
              <BlogSearch onSearch={handleSearch} categories={categories} />
              <BlogGrid posts={filteredPosts} />
              <RelatedPosts currentPost={currentPost} posts={blogPosts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;