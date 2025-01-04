import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { navItems } from "@/config/navigation";
import { AuthButton } from "./AuthButton";

export const DesktopMenu = () => {
  const location = useLocation();
  const session = useSession();
  const navigate = useNavigate();

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleNavigation(item.path)}
          className={`transition-all duration-200 ${
            isCurrentPath(item.path)
              ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:shadow-[0_0_10px_#ffffff] after:rounded-full"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {item.name}
        </button>
      ))}
      <AuthButton />
    </div>
  );
};