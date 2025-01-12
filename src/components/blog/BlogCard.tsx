import { Calendar } from "lucide-react";
import { BlogPost } from "../../types/blog";
import { LazyImage } from "@/components/ui/lazy-image";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div 
      className="bg-[#1A1F2C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <LazyImage
        src={post.featured_image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-48"
        width={800}
        height={400}
        quality={85}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-gray-300">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
        <p className="text-gray-200">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;