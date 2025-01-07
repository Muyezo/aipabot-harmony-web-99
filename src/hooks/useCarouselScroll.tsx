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
  const transitionEnabledRef = useRef(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const animate = () => {
      if (!isPausedRef.current && transitionEnabledRef.current) {
        currentPositionRef.current -= speed;
        const totalWidth = itemCount * itemWidth;
        
        if (Math.abs(currentPositionRef.current) >= totalWidth) {
          // Temporarily disable transition
          transitionEnabledRef.current = false;
          track.style.transition = 'none';
          
          // Move first set of items to the end
          for (let i = 0; i < itemCount; i++) {
            const firstItem = track.firstElementChild;
            if (firstItem) {
              track.appendChild(firstItem);
            }
          }
          
          // Reset position while maintaining visual continuity
          currentPositionRef.current = 0;
          track.style.transform = `translateX(${currentPositionRef.current}%)`;
          
          // Re-enable transition after a brief delay
          requestAnimationFrame(() => {
            track.style.transition = 'transform 2000ms linear';
            transitionEnabledRef.current = true;
          });
        } else {
          track.style.transform = `translateX(${currentPositionRef.current}%)`;
        }
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