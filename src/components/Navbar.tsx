import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopMenu } from "./navbar/DesktopMenu";
import { MobileMenu } from "./navbar/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl z-50">
      <nav className="bg-gradient-to-r from-[#1A1F2C] from-30% via-[#8f33ec] via-45% to-[#1A1F2C] to-70% rounded-xl shadow-lg border border-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                AipaBOT
              </Link>
            </div>

            <DesktopMenu />

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;