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
  const isResettingRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const animate = () => {
      if (!isPausedRef.current && !isResettingRef.current && transitionEnabledRef.current) {
        currentPositionRef.current -= speed;
        // Adjust totalWidth to account for the extra duplicated first item
        const totalWidth = (itemCount + 1) * itemWidth;
        
        if (Math.abs(currentPositionRef.current) >= totalWidth) {
          isResettingRef.current = true;
          
          // Temporarily disable transition
          track.style.transition = 'none';
          transitionEnabledRef.current = false;
          
          // Move items to maintain the sequence, including the duplicated first item
          for (let i = 0; i <= itemCount; i++) {
            const firstItem = track.firstElementChild;
            if (firstItem) {
              track.appendChild(firstItem);
            }
          }
          
          // Reset position while maintaining visual continuity
          currentPositionRef.current = -itemWidth; // Start from the second item position
          track.style.transform = `translateX(${currentPositionRef.current}%)`;
          
          // Re-enable transition after the next frame
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              track.style.transition = 'transform 2000ms linear';
              transitionEnabledRef.current = true;
              isResettingRef.current = false;
            });
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