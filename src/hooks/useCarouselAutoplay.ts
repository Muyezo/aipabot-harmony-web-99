import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface AutoplayOptions {
  delay?: number;
  speed?: number;
}

export const useCarouselAutoplay = (options: AutoplayOptions = {}) => {
  const autoplayOptions = {
    delay: 3000,
    speed: 0.5,
    ...options
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  useEffect(() => {
    if (emblaApi) {
      const animate = () => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        } else {
          emblaApi.scrollNext({ duration: autoplayOptions.speed });
        }
        setTimeout(animate, autoplayOptions.delay);
      };

      animate();
    }
  }, [emblaApi, autoplayOptions.delay, autoplayOptions.speed]);

  return { emblaRef, emblaApi };
};