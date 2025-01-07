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
    stopOnInteraction: true,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
    ...options
  };

  // Initialize autoplay plugin with options
  const autoplay = Autoplay({
    delay: autoplayOptions.delay,
    stopOnInteraction: autoplayOptions.stopOnInteraction,
    stopOnMouseEnter: autoplayOptions.stopOnMouseEnter,
    playOnInit: true,
    rootNode: autoplayOptions.rootNode
  });
  
  const autoplayPlugin = useRef(autoplay);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
    },
    [autoplayPlugin.current]
  );

  useEffect(() => {
    if (emblaApi) {
      // Ensure the carousel is ready before starting autoplay
      emblaApi.reInit();
      
      return () => {
        autoplayPlugin.current.stop();
      };
    }
  }, [emblaApi]);

  return {
    emblaRef,
    emblaApi,
    autoplayPlugin,
  };
};