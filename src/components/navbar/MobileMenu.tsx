import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    navigate(cleanPath);
    setOpenDropdown(null);
    onClose();
  };

  return (
    <div 
      className={`md:hidden fixed top-[3.5rem] sm:top-[4rem] left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out overflow-x-hidden ${
        isOpen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="py-2 sm:py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => (
          item.subItems ? (
            <div key={item.name} className="px-3 sm:px-4 py-1.5 sm:py-2 w-full">
              <DropdownMenu
                open={openDropdown === item.name}
                onOpenChange={(isOpen) => setOpenDropdown(isOpen ? item.name : null)}
              >
                <DropdownMenuTrigger className={`flex items-center gap-1 transition-all duration-200 w-full text-sm sm:text-base ${
                  isCurrentPath(item.path)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}>
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full min-w-[200px] bg-black/95 backdrop-blur-lg border-white/10">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem.name}
                      className="hover:bg-white/10 cursor-pointer whitespace-normal break-words text-sm sm:text-base py-2"
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
              className={`block w-full px-3 sm:px-4 py-1.5 sm:py-2 text-left transition-all duration-200 text-sm sm:text-base ${
                isCurrentPath(item.path)
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
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