import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll, { AutoScrollType } from 'embla-carousel-auto-scroll';

interface AutoplayOptions {
  delay?: number;
  speed?: number;
  stopOnInteraction?: boolean;
  startDelay?: number;
}

type EmblaOptionsType = {
  loop?: boolean;
  align?: 'start' | 'center' | 'end';
  dragFree?: boolean;
  containScroll?: 'trimSnaps' | 'keepSnaps';
};

export const useCarouselAutoplay = (options: AutoplayOptions = {}) => {
  const autoplayOptions: AutoplayOptions = {
    delay: 3000,
    speed: 2,
    stopOnInteraction: false,
    startDelay: 1000,
    ...options
  };

  const emblaOptions: EmblaOptionsType = {
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    emblaOptions,
    [AutoScroll(autoplayOptions)]
  );

  useEffect(() => {
    if (emblaApi) {
      const plugins = emblaApi.plugins();
      const autoScroll = plugins.autoScroll as AutoScrollType | undefined;
      
      if (!autoScroll) {
        console.warn('AutoScroll plugin not initialized');
        return;
      }

      const onPointerDown = () => {
        if (autoplayOptions.stopOnInteraction) {
          autoScroll.stop();
        }
      };

      const onPointerUp = () => {
        if (autoplayOptions.stopOnInteraction) {
          autoScroll.play();
        }
      };

      const onMouseEnter = () => {
        autoScroll.stop();
      };

      const onMouseLeave = () => {
        autoScroll.play();
      };

      emblaApi.on('pointerDown', onPointerDown);
      emblaApi.on('pointerUp', onPointerUp);
      
      const rootNode = emblaApi.rootNode();
      if (rootNode) {
        rootNode.addEventListener('mouseenter', onMouseEnter);
        rootNode.addEventListener('mouseleave', onMouseLeave);
      }

      // Start autoScroll
      autoScroll.play();

      return () => {
        // Cleanup
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
        
        if (rootNode) {
          rootNode.removeEventListener('mouseenter', onMouseEnter);
          rootNode.removeEventListener('mouseleave', onMouseLeave);
        }

        autoScroll.stop();
      };
    }
  }, [emblaApi, autoplayOptions.stopOnInteraction]);

  return { emblaRef, emblaApi };
};