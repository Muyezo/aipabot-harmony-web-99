import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;