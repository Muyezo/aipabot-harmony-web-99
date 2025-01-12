const QuickLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;