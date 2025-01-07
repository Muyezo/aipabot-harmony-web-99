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
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const animate = () => {
      if (!isPausedRef.current) {
        currentPositionRef.current -= speed;
        const totalWidth = itemCount * itemWidth;
        
        // When we've scrolled past the total width
        if (Math.abs(currentPositionRef.current) >= totalWidth) {
          // Reset position to maintain visual continuity
          currentPositionRef.current = 0;
          
          // Move all items that have scrolled past to the end
          const itemsToMove = Math.floor(Math.abs(currentPositionRef.current) / itemWidth);
          for (let i = 0; i < itemsToMove; i++) {
            const firstItem = track.firstElementChild;
            if (firstItem) {
              track.appendChild(firstItem);
            }
          }
        }
        
        track.style.transform = `translateX(${currentPositionRef.current}%)`;
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