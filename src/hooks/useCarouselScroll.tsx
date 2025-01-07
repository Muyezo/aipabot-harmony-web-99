import { useEffect, useRef } from 'react';

interface UseCarouselScrollProps {
  itemCount: number;
  itemWidth: number;
  speed?: number;
}

export const useCarouselScroll = ({ itemCount, itemWidth, speed = 0.05 }: UseCarouselScrollProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let currentPosition = 0;
    let animationFrameId: number;
    
    const animate = () => {
      currentPosition -= speed;
      const totalWidth = (itemCount * itemWidth);
      
      if (Math.abs(currentPosition) >= totalWidth) {
        currentPosition = 0;
      }
      
      track.style.transform = `translateX(${currentPosition}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const container = containerRef.current;
    if (container) {
      const pauseAnimation = () => cancelAnimationFrame(animationFrameId);
      const resumeAnimation = () => {
        animationFrameId = requestAnimationFrame(animate);
      };

      container.addEventListener('mouseenter', pauseAnimation);
      container.addEventListener('mouseleave', resumeAnimation);

      return () => {
        container.removeEventListener('mouseenter', pauseAnimation);
        container.removeEventListener('mouseleave', resumeAnimation);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [itemCount, itemWidth, speed]);

  return { trackRef, containerRef };
};