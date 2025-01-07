import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface AutoplayOptions {
  delay?: number;
  speed?: number;
  stopOnInteraction?: boolean;
  startDelay?: number;
}

export const useCarouselAutoplay = (options: AutoplayOptions = {}) => {
  const autoplayOptions = {
    delay: 3000,
    speed: 2,
    stopOnInteraction: false,
    startDelay: 1000,
    ...options
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps"
    },
    [AutoScroll({ ...autoplayOptions })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Initialize AutoScroll plugin
      const autoScroll = emblaApi.plugins()?.autoScroll;
      if (!autoScroll) return;

      // Handle pointer interactions
      const onPointerDown = () => {
        if (autoplayOptions.stopOnInteraction && autoScroll) {
          autoScroll.stop();
        }
      };

      const onPointerUp = () => {
        if (autoplayOptions.stopOnInteraction && autoScroll) {
          autoScroll.play();
        }
      };

      // Handle mouse hover
      const onMouseEnter = () => {
        if (autoScroll) {
          autoScroll.stop();
        }
      };

      const onMouseLeave = () => {
        if (autoScroll) {
          autoScroll.play();
        }
      };

      // Add event listeners
      emblaApi.on('pointerDown', onPointerDown);
      emblaApi.on('pointerUp', onPointerUp);
      
      const rootNode = emblaApi.rootNode();
      if (rootNode) {
        rootNode.addEventListener('mouseenter', onMouseEnter);
        rootNode.addEventListener('mouseleave', onMouseLeave);
      }

      // Cleanup
      return () => {
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
        if (rootNode) {
          rootNode.removeEventListener('mouseenter', onMouseEnter);
          rootNode.removeEventListener('mouseleave', onMouseLeave);
        }
        // Ensure autoScroll is properly stopped on cleanup
        if (autoScroll) {
          autoScroll.stop();
        }
      };
    }
  }, [emblaApi, autoplayOptions.stopOnInteraction]);

  return { emblaRef, emblaApi };
};