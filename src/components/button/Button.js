import { Button } from '@mui/material';
import React from 'react';

export default function ButtonItem({ handleClick, textContent }) {
  return (
    <Button
      onClick={handleClick}
      size="small"
      sx={{ backgroundColor: '#aaaaaa80', color: 'white' }}
    >
      {textContent}
    </Button>
  );
}
