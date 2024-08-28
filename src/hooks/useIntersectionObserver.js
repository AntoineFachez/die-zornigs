import { useRef, useEffect, useState } from 'react';

function useIntersectionObserver(refs, options) {
  // console.log('fired'); // This will still fire once on initial render
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const newVisibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => parseInt(entry.target.dataset.index, 10));

      setVisibleItems(newVisibleItems);
    }, options);

    // Observe elements initially
    refs.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    const handleScroll = () => {
      // Re-observe elements on scroll (if needed)
      refs.forEach((ref) => {
        if (ref && ref.current) {
          // You might not need to re-observe here if the browser handles it efficiently
          // observer.observe(ref.current);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refs, options]); // Only re-run if refs or options change

  return visibleItems;
}

export default useIntersectionObserver;
