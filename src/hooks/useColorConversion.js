import { useState } from "react";
import convert from "color-convert";

function useColorConversion(initialColor = "#000000") {
  const [color, setColor] = useState(initialColor);
  // console.log(color);

  function handleColorChange(event) {
    // console.log(event);
    const hexColor = event?.target?.value;
    const rgbColor = convert?.hex?.rgb(hexColor);
    const hsbColor = convert?.rgb?.hsv(rgbColor);

    setColor(hexColor);

    return {
      hex: hexColor,
      rgb: rgbColor,
      hsb: hsbColor,
    };
  }
  // console.log(color?.rgb);

  return { color, handleColorChange };
}
export default useColorConversion;
// const { color, handleColorChange } = useColorConversion("#000000");
