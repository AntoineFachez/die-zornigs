import React, { useEffect, useState } from "react";
import Sketch from "./Sketch";
import { basicBackground } from "../../../../themes/styledComponent";

const Index = (
  {
    //  width,
    //           height
  },
) => {
  const useResizeObserver = () => {
    const [entry, setEntry] = useState(null);
    const handleResize = (entries) => {
      setEntry(entries[0]);
    };

    useEffect(() => {
      setTimeout(() => {
        const observer = new ResizeObserver(handleResize);
        observer.observe(document.documentElement);

        return () => {
          observer.disconnect();
        };
      }, 800);
    }, []);

    return entry;
  };
  const entry = useResizeObserver();
  const width = entry?.target.offsetWidth;
  const height = entry?.target.offsetHeight;
  // console.log("mainColor", basicBackground);
  return (
    <>
      {" "}
      <Sketch
        width={width}
        height={height}
        mainColor={basicBackground?.backgroundColor}
      />
    </>
  );
};
export default Index;
