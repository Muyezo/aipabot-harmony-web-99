import { BlogPost } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "./RichTextEditor";
import ImageUploader from "./ImageUploader";
import CategorySelector from "./CategorySelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogFormProps {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  status: BlogPost['status'];
  featuredImage: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onExcerptChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: BlogPost['status']) => void;
  onImageUpload: (url: string) => void;
}

const BlogForm = ({
  title,
  content,
  excerpt,
  category,
  status,
  featuredImage,
  onTitleChange,
  onContentChange,
  onExcerptChange,
  onCategoryChange,
  onStatusChange,
  onImageUpload,
}: BlogFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Input
          placeholder="Post title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>

      <ImageUploader
        featuredImage={featuredImage}
        onImageUpload={onImageUpload}
      />

      <div>
        <RichTextEditor
          value={content}
          onChange={onContentChange}
          className="min-h-[400px] mb-4"
        />
      </div>

      <div>
        <Textarea
          placeholder="Post excerpt (optional)"
          value={excerpt}
          onChange={(e) => onExcerptChange(e.target.value)}
        />
      </div>

      <div>
        <CategorySelector 
          category={category}
          onCategoryChange={onCategoryChange}
        />
      </div>

      <div>
        <Select value={status} onValueChange={onStatusChange}>
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
  );
};

export default BlogForm;