import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const session = useSession();
  const supabase = useSupabaseClient();
  const { toast } = useToast();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Community Hub", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    }
  };

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

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-all duration-200 ${
                    isCurrentPath(item.path)
                      ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:shadow-[0_0_10px_#ffffff] after:rounded-full"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {session ? (
                <button
                  onClick={handleSignOut}
                  className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                >
                  Sign In
                </Link>
              )}
            </div>

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

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 transition-all duration-200 ${
                      isCurrentPath(item.path)
                        ? "text-white bg-white/10 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:shadow-[0_0_10px_#ffffff] after:rounded-full"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {session ? (
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-white font-medium hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    className="block px-3 py-2 text-white font-medium hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;