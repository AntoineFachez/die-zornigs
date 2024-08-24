import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import AppContext from '../context/AppContext';
import Index from '../widgets/p5/sketches/steeringText/Index';
import mobileFont from '../assets/fonts/MobileFont.ttf';
import './viktorStyle.css';
import Magnifier from '../widgets/p5/sketches/magnifier/Index';
export default function Viktor({ bgImg }) {
  const { kid } = useContext(AppContext);
  const [text, setText] = useState('Happy');
  const [stage, setStage] = useState(0);
  const [greetingParents, setGreetingParents] = useState(false);
  const finalStage = 2; // Index of the last word ("Viktor")
  const font = mobileFont;

  useEffect(() => {
    if (stage < finalStage) {
      const timer = setTimeout(() => {
        setStage(stage + 1);
      }, 7500);

      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    const wordMap = { 0: '   Happy', 1: '   Birthday', 2: 'Viktor' };
    setText(wordMap[stage]);
    const timer = setTimeout(() => {
      setGreetingParents(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, [stage]);
  const greetingMama = 'Mama';
  const greetingPapa = 'Papa';
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#4fc3f7',
        color: 'white',

        backgroundImage: `linear-gradient(to top, #4fc3f7, #000733)`,
        // fontSize: '4rem',
      }}
    >
      <Typography
        // className="vt323"
        sx={{ fontFamily: 'MobileFont', fontSize: '2rem' }}
      >
        Freitag, 26. Juli 2024
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 400,
          top: '0%',
          left: 0,
          right: 0,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {greetingParents && (
          <Typography
            className="vt323"
            sx={{
              position: 'absolute',
              width: '100%',
              height: 'fit-content',
              bottom: 0,
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '1.8rem',
              fontFamily: 'MobileFont',
              backgroundColor: '#33343340',
            }}
          >
            von {greetingMama}
            <br />
            &<br />
            {greetingPapa}
          </Typography>
        )}{' '}
        <Index
          // width={width}
          // height={height}
          text={text}
          // angle={angle}
          // size={size}
          // color="170,213,230"
          // shadowTxtColor={shadowTxtColor}
          // classBlinking={classBlinking}
          // isModified={isModified}
          // mainObjColor="170,213,230"
          // backgroundColor={backgroundColor}
        />{' '}
      </Box>

      {greetingParents && (
        <>
          {/* <Magnifier image={bgImg} /> */}
          <img
            src={bgImg}
            alt=""
            style={{
              position: 'absolute',
              zIndex: 0,
              top: '15%',
              right: 0,
              bottom: '20%',
              left: 0,
              width: '100%',
              height: '65%',
              objectFit: 'contain',
              opacity: 0.9,
            }}
          />
        </>
      )}
    </Box>
  );
}
