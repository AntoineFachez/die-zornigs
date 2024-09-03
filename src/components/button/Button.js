import { Button } from '@mui/material';
import React from 'react';

export default function ButtonItem({ props }) {
  return (
    <Button
      key={props.index}
      onClick={props?.handleClick}
      size="small"
      color={props?.color ? props?.color : 'primary'}
      // color="success"
      sx={
        // props?.style
        //   ? props?.style
        //   :
        {
          // backgroundColor: '#aaaaaa80',
          // color: 'white',
          fontFamily: 'Reddit Sans',
        }
      }
      disabled={props?.disabled}
      variant="contained"
    >
      {props?.textContent}
    </Button>
  );
}
