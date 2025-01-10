import { motion } from "framer-motion";
import { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

const RelatedPosts = ({ currentPost, posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;