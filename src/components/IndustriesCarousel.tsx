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
  const [isPaused, setIsPaused] = useState(false);
  const { emblaRef, autoplayPlugin } = useCarouselAutoplay();

  const handleIndustryClick = () => {
    if (autoplayPlugin.current) {
      setIsPaused(true);
      autoplayPlugin.current.stop();
      
      setTimeout(() => {
        setIsPaused(false);
        autoplayPlugin.current.play();
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1F2C] to-[#191f2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#9b87f5] mb-4">
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