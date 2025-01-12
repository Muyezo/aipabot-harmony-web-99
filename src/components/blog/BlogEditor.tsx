import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import BlogToolbar from "./BlogToolbar";
import BlogForm from "./BlogForm";

interface BlogEditorProps {
  post?: BlogPost;
  onSave: () => void;
  onCancel: () => void;
}

const BlogEditor = ({ post, onSave, onCancel }: BlogEditorProps) => {
  const session = useSession();
  const { toast } = useToast();
  
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [category, setCategory] = useState(post?.category || "");
  const [status, setStatus] = useState<BlogPost['status']>(post?.status || "draft");
  const [featuredImage, setFeaturedImage] = useState(post?.featured_image || "");

  const handleSave = async () => {
    if (!title || !content || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!session?.user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to save a post",
        variant: "destructive",
      });
      return;
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const postData = {
      title,
      content,
      excerpt,
      category,
      status,
      slug,
      featured_image: featuredImage,
      author_id: session?.user?.id,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    try {
      if (post?.id) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      toast({
        title: "Success",
        description: "Post saved successfully",
      });
      onSave();
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: "Failed to save post",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <BlogToolbar
        onSave={handleSave}
        onCancel={onCancel}
        isNew={!post}
      />

      <BlogForm
        title={title}
        content={content}
        excerpt={excerpt}
        category={category}
        status={status}
        featuredImage={featuredImage}
        onTitleChange={setTitle}
        onContentChange={setContent}
        onExcerptChange={setExcerpt}
        onCategoryChange={setCategory}
        onStatusChange={setStatus}
        onImageUpload={setFeaturedImage}
      />
    </div>
  );
};

export default BlogEditor;