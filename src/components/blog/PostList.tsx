import { BlogPost } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

interface PostListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (postId: string) => void;
}

const PostList = ({ posts, onEdit, onDelete }: PostListProps) => {
  return (
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
              onClick={() => onEdit(post)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(post.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;