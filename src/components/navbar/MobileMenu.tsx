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
      className={`md:hidden fixed top-[3.5rem] sm:top-[4rem] left-0 w-screen box-border transition-all duration-300 ease-in-out ${
        isOpen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ 
        margin: 0,
        padding: 0,
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl">
          <div className="py-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="px-4 py-2">
                  <DropdownMenu
                    open={openDropdown === item.name}
                    onOpenChange={(isOpen) => setOpenDropdown(isOpen ? item.name : null)}
                  >
                    <DropdownMenuTrigger 
                      className={`flex items-center justify-between w-full text-base ${
                        isCurrentPath(item.path)
                          ? "text-white font-medium"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-full bg-black/95 backdrop-blur-lg border-white/10 shadow-xl"
                      style={{ width: 'calc(100vw - 32px)' }}
                    >
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.name}
                          className="py-3 px-4 hover:bg-white/10 cursor-pointer text-base"
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
                  className={`w-full px-4 py-3 text-left text-base transition-colors ${
                    isCurrentPath(item.path)
                      ? "text-white font-medium"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;