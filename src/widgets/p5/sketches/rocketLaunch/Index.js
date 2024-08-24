import React, { useEffect, useRef, useState } from 'react';
import Sketch from './Sketch';

// import Refactor from "../../testing/Index";
import { Box, Button, IconButton, Typography } from '@mui/material';

export default function RocketLaunch({
  showSketch,
  setShowSketch,
  current,
  setCurrent,
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

  const [target, setTarget] = useState(76);
  const [timeoutId, setTimeoutId] = useState(0);
  // const [showSketch, setShowSketch] = useState(false);
  const sketchRef = useRef(null);

  let animationEnd = 6600;
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
  useEffect(() => {
    // setShowSketch(false);
    const timeoutId = setTimeout(() => {
      setShowSketch(true);
    }, 10);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    console.log('currentFrame', Math.round(current), Math.round(animationEnd));
    if (Math.round(current) >= Math.round(animationEnd)) {
      console.log('currentFrame End', current, Math.round(animationEnd));
      setShowSketch(false);
    }
    //   setTimeoutId(
    //     setTimeout(() => {
    //       // if (current >) {
    //       setShowSketch(true);
    //       // }
    //     }, 10)
    //   );

    return () => {
      // clearTimeout(timeoutId);
    };
  }, [current]);

  return (
    <>
      <Button
        sx={{ zIndex: 100, position: 'absolute', top: '5rem' }}
        onClick={() => setTarget(animationEnd)}
      >
        {showSketch && 'noch nicht angekommen'}
      </Button>
      {showSketch && (
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
            current={current}
            setCurrent={setCurrent}
            target={target}
            animationEnd={animationEnd}
            backgroundColor={backgroundColor}
            shadowTxtColor={shadowTxtColor}
            classBlinking={classBlinking}
          />
        </Box>
      )}
    </>
  );
}
