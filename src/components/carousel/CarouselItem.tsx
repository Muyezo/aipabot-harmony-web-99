import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselItemProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

const CarouselItem = ({ icon: Icon, name, description }: CarouselItemProps) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-64 p-6",
        "bg-card/50 backdrop-blur-sm rounded-xl",
        "border border-white/10",
        "hover:border-primary/50 transition-colors"
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-300 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;