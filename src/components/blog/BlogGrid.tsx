import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import BlogCard from "./BlogCard";
import { Skeleton } from "@/components/ui/skeleton";

const BlogGrid = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;