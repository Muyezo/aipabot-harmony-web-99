import React from 'react';
import { industries } from '@/constants/industries';
import CarouselItem from './carousel/CarouselItem';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const AutoScrollCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps" 
    },
    [AutoScroll()]
  );
  
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
          ref={emblaRef}
          className="overflow-hidden"
        >
          <div className="flex gap-6">
            {[...industries, ...industries].map((industry, index) => (
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