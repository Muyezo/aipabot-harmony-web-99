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
  
  const autoplayPlugin = useRef(
    Autoplay({
      delay: autoplayOptions.delay,
      stopOnInteraction: autoplayOptions.stopOnInteraction,
      stopOnMouseEnter: autoplayOptions.stopOnMouseEnter,
      playOnInit: false, // Changed to false to prevent early autoplay
      rootNode: autoplayOptions.rootNode
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplayPlugin.current]
  );

  useEffect(() => {
    if (emblaApi) {
      // Wait for the next tick to ensure carousel is mounted
      const timer = setTimeout(() => {
        autoplayPlugin.current.play();
      }, 0);
      
      return () => {
        clearTimeout(timer);
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