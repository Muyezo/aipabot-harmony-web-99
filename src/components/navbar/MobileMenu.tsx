import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/config/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    navigate(cleanPath);
    setOpenDropdown(null);
    onClose();
  };

  return (
    <div 
      className={`md:hidden fixed inset-x-0 top-[3.25rem] sm:top-[3.75rem] md:top-[4.25rem] bg-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out ${
        isOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="py-2 sm:py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
        {navItems.map((item) => (
          item.subItems ? (
            <div key={item.name} className="px-3 sm:px-4 py-1 sm:py-1.5">
              <DropdownMenu
                open={openDropdown === item.name}
                onOpenChange={(isOpen) => setOpenDropdown(isOpen ? item.name : null)}
              >
                <DropdownMenuTrigger className="flex items-center gap-1 w-full text-left text-sm sm:text-base transition-colors duration-200 text-white/60 hover:text-white">
                  {item.name}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full min-w-[200px] bg-[#1A1F2C] border-white/10">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem.name}
                      className="text-sm sm:text-base py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white"
                      onClick={() => handleNavigation(subItem.path)}
                    >
                      {subItem.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="block w-full px-3 sm:px-4 py-1 sm:py-1.5 text-left text-sm sm:text-base transition-colors duration-200 text-white/60 hover:text-white"
            >
              {item.name}
            </button>
          )
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;