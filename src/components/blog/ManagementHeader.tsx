import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ManagementHeaderProps {
  onNewPost: () => void;
}

const ManagementHeader = ({ onNewPost }: ManagementHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Blog Management</h2>
      <Button onClick={onNewPost} className="gap-2">
        <Plus className="h-4 w-4" /> New Post
      </Button>
    </div>
  );
};

export default ManagementHeader;