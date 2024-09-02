import { Box, Button } from '@mui/material';
import React from 'react';

export default function ListInSection({ props }) {
  return (
    <>
      {props?.list && (
        <ul style={props?.ulStyles}>
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
      )}
    </>
  );
}
