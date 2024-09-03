import { useState, useEffect } from "react";

type Dimensions = {
  width: number;
  height: number;
};

type SizeConstants = {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  margin: object;
};

const useResize = (
  ref: React.RefObject<HTMLElement>,
): [Dimensions, SizeConstants] => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === ref.current) {
          const { width, height } = entry.contentRect;
          setDimensions({ width, height });
        }
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref]);

  const parentWidth = dimensions.width;
  const parentHeight = dimensions.height;
  const margin = { top: 20, right: 10, bottom: 20, left: 10 };
  const width = parentWidth - margin.left - margin.right;
  const height = parentHeight - margin.top - margin.bottom;

  const sizeConstants: SizeConstants = {
    parentWidth,
    parentHeight,
    width,
    height,
    margin,
  };

  return [dimensions, sizeConstants];
};

export default useResize;
