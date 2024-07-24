import React, { useRef, useState } from 'react';
import Sketch from './Sketch';

// import Refactor from "../../testing/Index";
import { Box, Typography } from '@mui/material';

export default function FireWorks({
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
  const sketchRef = useRef(null);
  const handleToggleRefactor = () => {
    if (toggleRefactor) {
      setToggleRefactor(false);
    } else {
      setToggleRefactor(true);
    }
  };
  const windowWidth = sketchRef?.current?.clientWidth;
  const windowHeight = sketchRef?.current?.clientHeight;
  // console.log('windowWidth', sketchRef?.current?.clientWidth);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          // backgroundColor: `black`,
        }}
        ref={sketchRef}
      >
        <Sketch
          width={windowWidth}
          height={windowHeight}
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
      </Box>
    </>
  );
}
