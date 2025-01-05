import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import RichTextEditor from "./RichTextEditor";
import ImageUploader from "./ImageUploader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          {post ? "Edit Post" : "New Post"}
        </h2>
        <div className="flex gap-2">
          <Button onClick={onCancel} variant="outline">
            <X className="h-4 w-4" />
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Input
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <ImageUploader
          featuredImage={featuredImage}
          onImageUpload={setFeaturedImage}
        />

        <div>
          <RichTextEditor
            value={content}
            onChange={setContent}
            className="min-h-[400px] mb-4"
          />
        </div>

        <div>
          <Textarea
            placeholder="Post excerpt (optional)"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>

        <div>
          <Input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <Select value={status} onValueChange={(value: BlogPost['status']) => setStatus(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;