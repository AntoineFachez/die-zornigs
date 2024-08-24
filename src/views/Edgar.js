import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import AppContext from '../context/AppContext';
import Index from '../widgets/p5/sketches/steeringText/Index';
import RocketLaunch from '../widgets/p5/sketches/rocketLaunch/Index';
import hamburgSilouhette from '../assets/images/hamburg-skyline-panorama-silouhette.png';
import hamburgReflection from '../assets/images/hamburg-skyline-panorama-reflection.png';

export default function Edgar() {
  const { kid } = useContext(AppContext);
  const mainObjColor = '#a4ff08';
  const [current, setCurrent] = useState(0);
  const [showSketch, setShowSketch] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSketch(true);
    }, 10);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  function mapRange(value, in_min, in_max, out_min, out_max) {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }
  const scaledValue = mapRange(current, 0, 6650, 1, 0.0);
  console.log(scaledValue); // Output: 0.5
  return (
    <Box
      sx={{
        width: '100%',
        height: '92vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
        color: 'black',
        fontSize: '4rem',
        backgroundImage: `linear-gradient(to bottom, #00ff00 ,#4fc3f7)`,
        overflow: 'visible',
        userSelect: 'none',
      }}
    >
      {showSketch ? (
        <>
          <RocketLaunch
            mainObjColor={mainObjColor}
            showSketch={showSketch}
            setShowSketch={setShowSketch}
            current={current}
            setCurrent={setCurrent}
          />
          <Box
            sx={{
              position: 'fixed',
              zIndex: 100,
              bottom: 0,
              // transform: 'scale(1)',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              opacity: `${scaledValue}`,
            }}
          >
            <img
              src={hamburgSilouhette}
              style={{
                position: 'absolute',
                transform: `scale(${scaledValue})`,
                zIndex: 100,
                // bottom: `${5 * -scaledValue}rem`,
                bottom: `${-0.5}rem`,
                left: 0,
                right: 0,
                width: '100%',
                //   height: 'fit-content',
                objectFit: 'contain',
                backgroundColor: 'transparent',
              }}
              alt="hamburg reflection"
              draggable="false"
            />
            <img
              src={hamburgReflection}
              style={{
                width: '100%',
                transform: `scale(${scaledValue})`,
                bottom: `${0}rem`,
                // marginTop: '2rem',
                // height: '100%',
                objectFit: 'contain',
              }}
              alt="hamburg reflection"
              draggable="false"
            />
            {/* <Box
              sx={{
                position: 'absolute',

                zIndex: 100,

                height: 'fit-content',
                bottom: '-1rem',
                left: 0,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                padding: '0.5rem 0 0 0 ',
                // fontSize: '0.8rem',
                // color: 'white',
                // fontFamily: 'futura',
                // backgroundColor: '#4fc3f798',
              }}
            >
              <img
                src={hamburgReflection}
                style={{
                  width: '100%',
                  transform: `scale(${scaledValue})`,
                  // marginTop: '2rem',
                  // height: '100%',
                  objectFit: 'contain',
                }}
                alt="hamburg reflection"
                draggable="false"
              />
            </Box> */}
          </Box>
        </>
      ) : (
        <Index
          // width={width}
          // height={height}
          text={'Freitag'}
          // angle={angle}
          // size={size}
          // color={color}
          // shadowTxtColor={shadowTxtColor}
          // classBlinking={classBlinking}
          // isModified={isModified}
          // mainObjColor="170,213,230"
          // backgroundColor={backgroundColor}
        />
      )}
    </Box>
  );
}
