import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { industries } from "@/constants/industries";
import IndustryCard from "./industries/IndustryCard";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";

const IndustriesCarousel = () => {
  const [isPaused] = useState(false);
  const { emblaRef } = useCarouselAutoplay({
    delay: 3000,
    stopOnMouseEnter: false,
    stopOnInteraction: false
  });

  const handleIndustryClick = () => {
    console.log("Industry clicked");
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#221F26] via-[#ea384c] to-[#F97316] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9] via-[#6B46C1] to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-[40deg] from-[#0EA5E9] via-[#ea384c] to-[#F97316] opacity-30 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AipaBOT provides services for...
          </h2>
        </div>

        <Carousel
          ref={emblaRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {industries.map((industry, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <IndustryCard
                  icon={industry.icon}
                  name={industry.name}
                  description={industry.description}
                  onClick={handleIndustryClick}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default IndustriesCarousel;