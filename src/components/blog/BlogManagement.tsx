import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import BlogEditor from "./BlogEditor";
import { BlogPost } from "@/types/blog";

const BlogManagement = () => {
  const session = useSession();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const { data: posts, refetch } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("author_id", session?.user?.id);

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const handleDelete = async (postId: string) => {
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", postId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Post deleted successfully",
    });
    refetch();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Blog Management</h2>
        <Button onClick={() => setIsEditing(true)} className="gap-2">
          <Plus className="h-4 w-4" /> New Post
        </Button>
      </div>

      {isEditing ? (
        <BlogEditor
          post={selectedPost}
          onSave={async () => {
            setIsEditing(false);
            setSelectedPost(null);
            refetch();
          }}
          onCancel={() => {
            setIsEditing(false);
            setSelectedPost(null);
          }}
        />
      ) : (
        <div className="grid gap-4">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="bg-card p-4 rounded-lg border flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Status: {post.status}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedPost(post);
                    setIsEditing(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogManagement;