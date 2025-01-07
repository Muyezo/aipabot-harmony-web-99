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
      ...autoplayOptions,
      playOnInit: true
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplayPlugin.current]
  );

  useEffect(() => {
    if (emblaApi) {
      const onInit = () => {
        // Ensure autoplay starts immediately
        autoplayPlugin.current.play();
      };

      emblaApi.on('init', onInit);
      // Start autoplay when component mounts
      autoplayPlugin.current.play();

      return () => {
        autoplayPlugin.current.stop();
        emblaApi.off('init', onInit);
      };
    }
  }, [emblaApi]);

  return {
    emblaRef,
    emblaApi,
    autoplayPlugin,
  };
};