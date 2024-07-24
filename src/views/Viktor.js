import React, { useContext } from 'react';
import { Box } from '@mui/material';

import AppContext from '../context/AppContext';
import Index from '../widgets/p5/sketches/steeringText/Index';

export default function Viktor() {
  const { kid } = useContext(AppContext);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4fc3f7',
        color: 'white',
        fontSize: '4rem',
      }}
    >
      <Index
        // width={width}
        // height={height}
        text={kid}
        // angle={angle}
        // size={size}
        // color="170,213,230"
        // shadowTxtColor={shadowTxtColor}
        // classBlinking={classBlinking}
        // isModified={isModified}
        // mainObjColor="170,213,230"
        // backgroundColor={backgroundColor}
      />
    </Box>
  );
}
