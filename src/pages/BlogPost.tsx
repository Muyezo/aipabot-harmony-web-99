import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LazyImage } from "@/components/ui/lazy-image";
import { Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  const { data: author, isLoading: authorLoading } = useQuery({
    queryKey: ["profile", post?.author_id],
    queryFn: async () => {
      if (!post?.author_id) return null;
      
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
    enabled: !!post?.author_id,
  });

  const isLoading = postLoading || authorLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/4 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-2xl font-bold text-white">Post not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="grid-overlay" />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="card-content backdrop-blur-md p-8 rounded-xl">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-300 mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
              </div>
              {post.featured_image && (
                <LazyImage
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                  width={1200}
                  height={400}
                  quality={90}
                />
              )}
              {author && (
                <div className="flex items-center mb-8 bg-white/10 p-4 rounded-lg">
                  <LazyImage
                    src={author.avatar_url || "/placeholder.svg"}
                    alt={author.full_name || "Author"}
                    className="h-12 w-12 rounded-full mr-4"
                    width={48}
                    height={48}
                    quality={90}
                  />
                  <div>
                    <p className="text-lg font-medium text-white">
                      {author.full_name || author.username || "Anonymous"}
                    </p>
                    {author.username && (
                      <p className="text-sm text-gray-300">@{author.username}</p>
                    )}
                  </div>
                </div>
              )}
            </header>
            <div 
              className="prose prose-invert prose-lg max-w-none text-white
                prose-headings:text-white
                prose-h1:text-4xl prose-h1:font-bold
                prose-h2:text-3xl prose-h2:font-semibold
                prose-h3:text-2xl prose-h3:font-medium
                prose-h4:text-xl
                prose-p:text-gray-200
                prose-a:text-blue-400 hover:prose-a:text-blue-300
                prose-strong:text-white
                prose-blockquote:text-gray-300
                prose-code:text-blue-300
                prose-pre:bg-gray-900
                prose-ol:text-gray-200
                prose-ul:text-gray-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;