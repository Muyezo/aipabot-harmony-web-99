import { Calendar } from "lucide-react";
import { BlogPost } from "../../types/blog";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LazyImage } from "@/components/ui/lazy-image";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { data: author } = useQuery({
    queryKey: ["profile", post.author_id],
    queryFn: async () => {
      if (!post.author_id) return null;
      
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", post.author_id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching author:", error);
        return null;
      }
      return data;
    },
    enabled: !!post.author_id, // Only run query if we have an author_id
  });

  return (
    <div className="bg-[#1A1F2C] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <LazyImage
        src={post.featured_image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-48"
        width={800}
        height={400}
        quality={85}
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-300 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
        <p className="text-gray-200 mb-4">{post.excerpt}</p>
        {author && (
          <div className="flex items-center">
            <LazyImage
              src={author.avatar_url || "/placeholder.svg"}
              alt={author.full_name || "Author"}
              className="h-10 w-10 rounded-full mr-3"
              width={40}
              height={40}
              quality={90}
            />
            <div>
              <p className="text-sm font-medium text-white">
                {author.full_name || "Anonymous"}
              </p>
              <p className="text-sm text-gray-300">{author.username || "User"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;