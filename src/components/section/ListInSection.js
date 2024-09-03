import React from 'react';
import { Box, Button } from '@mui/material';
import { ulStyles } from '../../theme/stylesData';

export default function ListInCard({ props }) {
  return (
    <ul style={ulStyles}>
      {props?.list.map((item, i) => (
        <Button
          key={i}
          variant="outlined"
          sx={{
            ...props?.textButtonStyles,
            // '&:hover': {},
          }}
        >
          {item.name}
        </Button>
      ))}
    </ul>
  );
}
