import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import BlogCard from "./BlogCard";
import BlogCategories from "./BlogCategories";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface BlogSearchProps {
  onSearch?: (query: string, category: string) => void;
  categories?: string[];
}

const POSTS_PER_PAGE = 6;

const BlogSearch = ({ onSearch, categories = [] }: BlogSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts', searchTerm, selectedCategory],
    queryFn: async () => {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published');

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`);
      }

      if (selectedCategory && selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query.order('published_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on new search
    if (onSearch) {
      onSearch(value, selectedCategory);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
    if (onSearch) {
      onSearch(searchTerm, category);
    }
  };

  // Pagination calculations
  const totalPosts = posts?.length || 0;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts?.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 max-w-3xl mx-auto">
        <Input
          type="search"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1"
        />
        <BlogCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(POSTS_PER_PAGE)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts?.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="cursor-pointer"
                    />
                  </PaginationItem>
                )}
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="cursor-pointer"
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
};

export default BlogSearch;