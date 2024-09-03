import { useState, useEffect, useRef } from "react";

function useAnimation(startTime, start, end, duration, onEnd) {
  const [value, setValue] = useState(start);

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  const isFinished = useRef(false); // Use useRef to track completion

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      // console.log(now, startTime, start, end, duration, onEnd);
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const newValue = lerp(start, end, progress);

      setValue(newValue);

      if (elapsed >= duration) {
        onEnd && onEnd();
        isFinished.current = true; // Mark as finished
      } else {
        requestAnimationFrame(animate);
      }
    };

    startTime.current = Date.now();
    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate);
  }, [start, end, duration, onEnd]);

  // Check completion flag before starting animation
  if (isFinished.current) {
    return value; // Return current value if finished
  }

  return value;
}
export default useAnimation;
