import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategories = ({ categories, selectedCategory, onCategoryChange }: BlogCategoriesProps) => {
  return (
    <div className="flex items-center gap-2 max-w-md mx-auto mb-4">
      <Filter className="h-4 w-4 text-gray-400" />
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px] bg-background">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogCategories;