import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  onClick: () => void;
}

const IndustryCard = ({ icon: Icon, name, description, onClick }: IndustryCardProps) => {
  return (
    <div 
      className="bg-card rounded-xl p-6 h-full flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default IndustryCard;