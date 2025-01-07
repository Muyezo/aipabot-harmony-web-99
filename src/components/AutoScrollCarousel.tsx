import React from 'react';
import { industries } from '@/constants/industries';
import CarouselItem from './carousel/CarouselItem';
import { useCarouselScroll } from '@/hooks/useCarouselScroll';

const AutoScrollCarousel = () => {
  // Duplicate the industries array three times to ensure smooth looping
  const items = [...industries, ...industries, ...industries];
  const { trackRef, containerRef } = useCarouselScroll({
    itemCount: industries.length,
    itemWidth: 17.5, // 16rem (w-64) + 1.5rem gap
  });
  
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
            {items.map((industry, index) => (
              <CarouselItem
                key={`${industry.name}-${index}`}
                icon={industry.icon}
                name={industry.name}
                description={industry.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollCarousel;