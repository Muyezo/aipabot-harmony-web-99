import { Calendar } from "lucide-react";
import { BlogPost } from "../../types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-[#1A1F2C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-300 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
        <p className="text-gray-200 mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-white">{post.author.name}</p>
            <p className="text-sm text-gray-300">{post.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;