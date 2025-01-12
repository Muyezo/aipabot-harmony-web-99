import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { supabase } from "@/integrations/supabase/client";

interface CategorySelectorProps {
  category: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = ({ category, onCategoryChange }: CategorySelectorProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isNewCategory, setIsNewCategory] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category')
      .not('category', 'is', null);

    if (error) {
      console.error('Error fetching categories:', error);
      return;
    }

    const uniqueCategories = Array.from(new Set(data.map(post => post.category)));
    setCategories(uniqueCategories);
  };

  return (
    <Popover open={isNewCategory} onOpenChange={setIsNewCategory}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {category || "Select category..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {categories.map((cat) => (
                <CommandItem
                  key={cat}
                  onSelect={() => {
                    onCategoryChange(cat);
                    setIsNewCategory(false);
                  }}
                >
                  {cat}
                </CommandItem>
              ))}
              <CommandItem
                onSelect={() => {
                  setIsNewCategory(true);
                }}
              >
                + Add new category
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        {isNewCategory && (
          <div className="p-2">
            <Input
              placeholder="Enter new category"
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsNewCategory(false);
                }
              }}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CategorySelector;