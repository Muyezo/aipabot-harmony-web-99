import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building2, Briefcase, Hospital, Landmark, ShoppingBag, Warehouse, GraduationCap, Plane } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Property management & sales automation"
  },
  {
    icon: Hospital,
    name: "Healthcare",
    description: "Patient care & administrative support"
  },
  {
    icon: Landmark,
    name: "Financial Services",
    description: "Banking & investment automation"
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    description: "Customer service & inventory management"
  },
  {
    icon: Warehouse,
    name: "Manufacturing",
    description: "Production & quality control"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Student support & administrative tasks"
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Consulting & client management"
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description: "Booking & customer experience"
  }
];

const IndustriesCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Create autoplay plugin instance outside of options
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    rootNode: (emblaRoot) => emblaRoot,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay]
  );

  const handleIndustryClick = () => {
    if (emblaApi) {
      setIsPaused(true);
      autoplay.stop();
      setTimeout(() => {
        setIsPaused(false);
        autoplay.play();
      }, 5000);
    }
  };

  // Ensure autoplay starts when component mounts
  useEffect(() => {
    if (emblaApi) {
      autoplay.play();
    }
  }, [emblaApi]);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                onClick={handleIndustryClick}
              >
                <div 
                  className="bg-card rounded-xl p-6 h-full flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
                </div>
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