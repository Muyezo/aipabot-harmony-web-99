import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogEditorProps {
  post?: BlogPost | null;
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
  const [status, setStatus] = useState(post?.status || "draft");

  const handleSave = async () => {
    if (!title || !content || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const postData = {
      title,
      content,
      excerpt,
      category,
      status,
      slug,
      author_id: session?.user?.id,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { error } = post?.id
      ? await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", post.id)
      : await supabase.from("blog_posts").insert([postData]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to save post",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Post saved successfully",
    });
    onSave();
  };

  return (
    <div className="space-y-4 bg-card p-6 rounded-lg border">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">
          {post ? "Edit Post" : "New Post"}
        </h3>
        <div className="flex gap-2">
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" /> Save
          </Button>
          <Button variant="outline" onClick={onCancel} className="gap-2">
            <X className="h-4 w-4" /> Cancel
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

        <div>
          <Textarea
            placeholder="Post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[200px]"
          />
        </div>

        <div>
          <Textarea
            placeholder="Post excerpt (optional)"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;