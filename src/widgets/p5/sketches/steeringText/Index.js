import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Sketch from './Sketch';

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
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeigth / 4;
  console.log('windowWidth', windowWidth);
  return (
    <>
      <Box sx={{ backgroundColor: 'black' }}>
        {text && (
          <Sketch
            width={windowWidth}
            height={400}
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
        )}
      </Box>
    </>
  );
}
