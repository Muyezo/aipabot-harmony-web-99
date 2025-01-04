import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "@supabase/auth-helpers-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import BlogEditor from "./BlogEditor";
import PostList from "./PostList";
import ManagementHeader from "./ManagementHeader";

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
      return data as BlogPost[];
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

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    setSelectedPost(null);
    refetch();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedPost(null);
  };

  return (
    <div className="space-y-6">
      <ManagementHeader onNewPost={() => setIsEditing(true)} />

      {isEditing ? (
        <BlogEditor
          post={selectedPost}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <PostList
          posts={posts || []}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default BlogManagement;