import { useLayoutEffect, useState } from 'react';

function useOrientation() {
  const [orientation, setOrientation] = useState('portrait'); // Default to portrait

  useLayoutEffect(() => {
    const updateOrientation = () => {
      const aspectRatio = window.innerHeight / window.innerWidth;
      setOrientation(aspectRatio > 1 ? true : false);
    };

    updateOrientation(); // Initial check

    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return orientation;
}
export default useOrientation;
