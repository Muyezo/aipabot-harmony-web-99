import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopMenu } from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto px-3 sm:px-4 py-3 sm:py-4 max-w-screen-xl">
        <div className="flex items-center justify-between">
          <div 
            className="cursor-pointer flex-shrink-0" 
            onClick={() => navigate("/")}
          >
            <img 
              src="/lovable-uploads/4d412577-1998-4c40-b39c-68c08fde228a.png" 
              alt="AIPA Bot Logo" 
              className="h-7 sm:h-8 md:h-10"
            />
          </div>
          <DesktopMenu />
          <button
            className="md:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200" />
            )}
          </button>
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;