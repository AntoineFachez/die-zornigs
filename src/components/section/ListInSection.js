import { Box } from '@mui/material';
import React from 'react';

export default function ListInSection({ props }) {
  return (
    <>
      {props?.list && (
        <ul style={props?.ulStyles}>
          {props?.list.map((item, i) => (
            <Box key={i} sx={props?.liStyles}>
              {item.name}
            </Box>
          ))}
        </ul>
      )}
    </>
  );
}
