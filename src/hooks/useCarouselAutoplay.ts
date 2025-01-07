import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface AutoplayOptions {
  delay?: number;
  speed?: number;
  stopOnInteraction?: boolean;
}

export const useCarouselAutoplay = (options: AutoplayOptions = {}) => {
  const autoplayOptions = {
    delay: 3000,
    speed: 1,
    stopOnInteraction: true,
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

      emblaApi.on('pointerDown', onPointerDown);
      emblaApi.on('pointerUp', onPointerUp);

      return () => {
        emblaApi.off('pointerDown', onPointerDown);
        emblaApi.off('pointerUp', onPointerUp);
      };
    }
  }, [emblaApi, autoplayOptions.stopOnInteraction]);

  return { emblaRef, emblaApi };
};