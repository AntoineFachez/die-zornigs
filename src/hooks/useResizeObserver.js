import React, { useEffect, useRef } from "react";

const useResizeObserver = (
  nestedRef,
  setDimensions,
  handleUserActivity,
  setIsUserActive,
) => {
  const parentRef = useRef(nestedRef);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === nestedRef.current) {
          // Get the new dimensions of the parent element
          const { width, height } = entry.contentRect;

          // Set the dimensions of the globe component
          setDimensions({ width, height });
        }
      }
    });

    resizeObserver.observe(nestedRef.current);
    const timeoutId = setTimeout(() => {
      setIsUserActive(false);
    }, 10);

    document.addEventListener("mousemove", handleUserActivity);
    // selectedLocationsMarkerArray?.push({
    //   lat: center.lat,
    //   lng: center.lng,
    //   name: "you are here",
    //   size: 7 + Math.random() * 30,
    //   color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    // });
    // console.log(height);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", handleUserActivity);
    };
  }, [handleUserActivity]);
};

export default useResizeObserver;
//TODO: USAGE:
{
  /*import React from 'react';
import useResizeObserver from './useResizeObserver';

const ComponentA = () => {
  const entry = useResizeObserver();

  return (
    <div>
      <p>Width: {entry?.contentRect.width}</p>
      <p>Height: {entry?.contentRect.height}</p>
    </div>
  );
}

const ComponentB = () => {
  const entry = useResizeObserver();

  return (
    <div>
      <p>Width: {entry?.contentRect.width}</p>
      <p>Height: {entry?.contentRect.height}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}
*/
}
