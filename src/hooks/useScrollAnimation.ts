
import { useState, useEffect } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-scroll-id');
          if (id) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(id);
              } else {
                newSet.delete(id);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const elements = document.querySelectorAll('[data-scroll-id]');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [threshold]);

  return visibleElements;
};
