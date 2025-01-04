import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

const LazyImage = ({ 
  src, 
  alt, 
  className,
  width,
  height,
  quality = 75,
  format = 'webp',
  ...props 
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState("/placeholder.svg");
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    // If it's an Unsplash image, use their optimization API
    if (src.includes('images.unsplash.com')) {
      const baseUrl = src.split('?')[0];
      const params = new URLSearchParams({
        w: width?.toString() || '800',
        q: quality.toString(),
        fm: format,
        fit: 'clip',
        auto: 'format'
      });
      img.src = `${baseUrl}?${params.toString()}`;
    } else {
      img.src = src;
    }

    img.onload = () => {
      setCurrentSrc(img.src);
      setIsLoading(false);
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setError(true);
      setIsLoading(false);
    };
  }, [src, width, quality, format]);

  if (error) {
    return (
      <div 
        className={cn(
          "bg-gray-200 flex items-center justify-center",
          className
        )}
        style={{ width, height }}
      >
        <span className="text-gray-400">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"
          style={{ width, height }}
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300 object-cover",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default LazyImage;