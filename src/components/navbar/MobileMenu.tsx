import { useLocation, useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { navItems } from "@/config/navigation";
import { AuthButton } from "./AuthButton";

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
    if (path === "/" && !session) {
      navigate("/auth");
    } else {
      navigate(path);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`block w-full text-left px-3 py-2 transition-all duration-200 ${
              isCurrentPath(item.path)
                ? "text-white bg-white/10 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:shadow-[0_0_10px_#ffffff] after:rounded-full"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
        <div className="px-3 py-2">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};