import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import BlogCard from "./BlogCard";

interface BlogSearchProps {
  onSearch?: (query: string, category: string) => void;
  categories?: string[];
}

const BlogSearch = ({ onSearch, categories }: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts', searchTerm],
    queryFn: async () => {
      const query = supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published');

      if (searchTerm) {
        query.or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`);
      }

      const { data, error } = await query.order('published_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Cache data for 30 minutes
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value, ''); // Passing empty string as category since it's not implemented in the search component
    }
  };

  return (
    <div className="space-y-8">
      <Input
        type="search"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={handleSearch}
        className="max-w-md mx-auto"
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSearch;