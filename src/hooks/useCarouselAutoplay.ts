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
    [AutoScroll(autoplayOptions)]
  );

  useEffect(() => {
    if (emblaApi) {
      const onPointerDown = () => {
        if (autoplayOptions.stopOnInteraction) {
          emblaApi.plugins().autoScroll.stop();
        }
      };

      const onPointerUp = () => {
        if (autoplayOptions.stopOnInteraction) {
          emblaApi.plugins().autoScroll.play();
        }
      };

      const onMouseEnter = () => {
        emblaApi.plugins().autoScroll.stop();
      };

      const onMouseLeave = () => {
        emblaApi.plugins().autoScroll.play();
      };

      emblaApi.on('pointerDown', onPointerDown);
      emblaApi.on('pointerUp', onPointerUp);
      emblaApi.rootNode().addEventListener('mouseenter', onMouseEnter);
      emblaApi.rootNode().addEventListener('mouseleave', onMouseLeave);

      return () => {
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
        emblaApi.rootNode().removeEventListener('mouseenter', onMouseEnter);
        emblaApi.rootNode().removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [emblaApi, autoplayOptions.stopOnInteraction]);

  return { emblaRef, emblaApi };
};