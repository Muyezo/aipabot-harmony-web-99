import { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface AutoplayOptions {
  delay?: number;
  stopOnInteraction?: boolean;
  stopOnMouseEnter?: boolean;
  rootNode?: (emblaRoot: any) => any;
}

export const useCarouselAutoplay = (options: AutoplayOptions = {}) => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
    ...options
  };

  const autoplay = Autoplay({
    delay: autoplayOptions.delay,
    stopOnInteraction: autoplayOptions.stopOnInteraction,
    stopOnMouseEnter: autoplayOptions.stopOnMouseEnter,
    playOnInit: true,
    rootNode: autoplayOptions.rootNode
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
    },
    [autoplay]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return { emblaRef, emblaApi };
};