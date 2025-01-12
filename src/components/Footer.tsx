import SocialLinks from "./footer/SocialLinks";
import QuickLinks from "./footer/QuickLinks";
import Newsletter from "./footer/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SocialLinks />
          <QuickLinks />
          <Newsletter />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AipaBOT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;