import { useLocation, useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/config/navigation";
import { AuthButton } from "./AuthButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const session = useSession();
  const navigate = useNavigate();

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10">
      <div className="py-4 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
        {navItems.map((item) => (
          item.subItems ? (
            <div key={item.name} className="px-4 py-2">
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center gap-1 transition-all duration-200 w-full ${
                  isCurrentPath(item.path)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}>
                  {item.name}
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border border-white/10 text-white w-[calc(100vw-2rem)] mx-4">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem.name}
                      className="hover:bg-white/10 cursor-pointer"
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
              className={`block w-full text-left px-4 py-2 transition-all duration-200 ${
                isCurrentPath(item.path)
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </button>
          )
        ))}
        <div className="px-4 py-2">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};