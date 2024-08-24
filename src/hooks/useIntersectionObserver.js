import { useState, useEffect, useRef } from "react";

function useIntersectionObserver(options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.root, options.rootMargin]);

  return [ref, isIntersecting];
}
export default useIntersectionObserver;
//TODO: USAGE:
{
  /*import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const App = () => {
  const [ref, isIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  return (
    <div>
      <h1>Intersection Observer Example</h1>
      <div ref={ref}>
        {isIntersecting ? (
          <p>The element is visible in the viewport!</p>
        ) : (
          <p>Scroll down to see the element...</p>
        )}
      </div>
    </div>
  );
};

export default App;
*/
}
