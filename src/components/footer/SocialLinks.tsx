import { X, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
      <div className="flex space-x-4">
        <a href="https://tiktok.com" className="hover:text-primary transition-colors">
          <img 
            src="/lovable-uploads/81f09327-b5e5-431b-8589-7db1f113c6c4.png" 
            alt="TikTok"
            className="w-6 h-6"
          />
        </a>
        <a href="https://x.com" className="hover:text-primary transition-colors">
          <X className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" className="hover:text-primary transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" className="hover:text-primary transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;