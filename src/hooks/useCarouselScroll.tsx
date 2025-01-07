import { useEffect, useRef } from 'react';

interface UseCarouselScrollProps {
  itemCount: number;
  itemWidth: number;
  speed?: number;
}

export const useCarouselScroll = ({ itemCount, itemWidth, speed = 0.05 }: UseCarouselScrollProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let currentPosition = 0;
    
    const animate = () => {
      if (!isPausedRef.current) {
        currentPosition -= speed;
        const totalWidth = itemCount * itemWidth;
        
        // When we've scrolled past one complete set of items
        if (Math.abs(currentPosition) >= totalWidth) {
          // Instead of resetting to 0, subtract the total width to maintain continuous flow
          currentPosition += totalWidth;
        }
        
        track.style.transform = `translateX(${currentPosition}%)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const container = containerRef.current;
    if (container) {
      const pauseAnimation = () => {
        isPausedRef.current = true;
      };
      
      const resumeAnimation = () => {
        isPausedRef.current = false;
      };

      container.addEventListener('mouseenter', pauseAnimation);
      container.addEventListener('mouseleave', resumeAnimation);

      return () => {
        container.removeEventListener('mouseenter', pauseAnimation);
        container.removeEventListener('mouseleave', resumeAnimation);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [itemCount, itemWidth, speed]);

  return { trackRef, containerRef };
};