import { Button } from "@/components/ui/button";
import { Save, X } from "lucide-react";

interface BlogToolbarProps {
  onSave: () => void;
  onCancel: () => void;
  isNew: boolean;
}

const BlogToolbar = ({ onSave, onCancel, isNew }: BlogToolbarProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">
        {isNew ? "New Post" : "Edit Post"}
      </h2>
      <div className="flex gap-2">
        <Button onClick={onCancel} variant="outline">
          <X className="h-4 w-4" />
        </Button>
        <Button onClick={onSave}>
          <Save className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogToolbar;