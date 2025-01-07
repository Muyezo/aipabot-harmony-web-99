import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { industries } from '@/constants/industries';

const AutoScrollCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate items for seamless loop
  const items = [...industries, ...industries];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let currentPosition = 0;
    let animationFrameId: number;
    
    const animate = () => {
      currentPosition -= 0.5; // Adjust speed here
      
      // Calculate the total width of all items (each item is 16rem + 1.5rem gap)
      const itemWidth = 17.5; // 16rem (w-64) + 1.5rem gap
      const totalWidth = (industries.length * itemWidth); // Only count original items
      
      // Reset position when all original items have scrolled
      if (Math.abs(currentPosition) >= totalWidth) {
        currentPosition = 0;
      }
      
      track.style.transform = `translateX(${currentPosition}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Optional: Pause on hover
    const container = containerRef.current;
    if (container) {
      const pauseAnimation = () => cancelAnimationFrame(animationFrameId);
      const resumeAnimation = () => {
        animationFrameId = requestAnimationFrame(animate);
      };

      container.addEventListener('mouseenter', pauseAnimation);
      container.addEventListener('mouseleave', resumeAnimation);

      return () => {
        container.removeEventListener('mouseenter', pauseAnimation);
        container.removeEventListener('mouseleave', resumeAnimation);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#221F26] via-[#ea384c] to-[#F97316] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9] via-[#6B46C1] to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-[40deg] from-[#0EA5E9] via-[#ea384c] to-[#F97316] opacity-30 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AipaBOT provides services for...
          </h2>
        </div>

        <div 
          ref={containerRef}
          className="w-full overflow-hidden"
        >
          <div 
            ref={trackRef}
            className="flex gap-6 transition-transform duration-[2000ms] ease-linear will-change-transform"
            style={{ width: `${items.length * 100}%` }}
          >
            {items.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={`${industry.name}-${index}`}
                  className={cn(
                    "flex-shrink-0 w-64 p-6",
                    "bg-card/50 backdrop-blur-sm rounded-xl",
                    "border border-white/10",
                    "hover:border-primary/50 transition-colors"
                  )}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-300 text-center">
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollCarousel;