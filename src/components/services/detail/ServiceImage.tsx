import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

interface ServiceImageProps {
  image: string;
  title: string;
}

const ServiceImage = ({ image, title }: ServiceImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 mb-12 relative"
    >
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video max-w-4xl mx-auto">
        <LazyImage
          src={image}
          alt={`${title} Integration`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default ServiceImage;