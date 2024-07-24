import React, { useState } from "react";
import Sketch from "./Sketch";

// import Refactor from "../../testing/Index";
import { Box, Typography } from "@mui/material";

export default function Texting({
  width, //
  height, //
  text, //
  angle, //
  size, //
  color, //
  shadowTxtColor, //
  classBlinking, //
  isModified, //
  mainObjColor, //
  backgroundColor, //
}) {
  const [toggleRefactor, setToggleRefactor] = useState(false);

  const handleToggleRefactor = () => {
    if (toggleRefactor) {
      setToggleRefactor(false);
    } else {
      setToggleRefactor(true);
    }
  };
  return (
    <>
      <>
        <Sketch
          width={width}
          height={height}
          text={text}
          angle={angle}
          size={size}
          color={color}
          isModified={isModified}
          mainObjColor={mainObjColor}
          backgroundColor={backgroundColor}
          shadowTxtColor={shadowTxtColor}
          classBlinking={classBlinking}
        />
      </>
      <></>
    </>
  );
}
