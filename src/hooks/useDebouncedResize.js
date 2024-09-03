import { useState, useEffect } from "react";

function useDebouncedResize(callback, ref, delay = 100) {
  // console.log("widgetRef", ref);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const element = ref?.current; // Get the actual DOM element

    if (!element) return; // Handle cases where ref might be null initially

    const handleResize = () => {
      if (isWaiting) return;
      setIsWaiting(true);
      setTimeout(() => {
        setIsWaiting(false);
        callback();
      }, delay);
    };

    element.addEventListener("resize", handleResize);

    return () => element.removeEventListener("resize", handleResize);
  }, [callback, ref, delay]);

  return isWaiting;
}
export default useDebouncedResize;
