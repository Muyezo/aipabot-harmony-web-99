import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { industries } from "@/constants/industries";
import IndustryCard from "./industries/IndustryCard";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useRef } from "react";

const IndustriesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      containScroll: "trimSnaps"
    },
    [AutoScroll({ 
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 1
    })]
  );

  const handleIndustryClick = () => {
    console.log("Industry clicked");
  };

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

        <Carousel
          ref={emblaRef}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4 shrink-0"
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
        </Carousel>
      </div>
    </section>
  );
};

export default IndustriesCarousel;