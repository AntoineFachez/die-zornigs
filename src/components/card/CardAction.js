import React, { useContext } from 'react';
import { Box } from '@mui/material';
import ButtonItem from '../button/Button';

import ListInSection from '../section/ListInSection';
export default function CardAction({ handleClick, props }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '30%',
        width: '100%',
        height: 'fit-content',
        // height: '100%',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        padding: '1rem 0',
        alignContent: 'center',
        backgroundColor: '#01012320',
        gap: '1rem',
      }}
    >
      {' '}
      {/* <ListInSection props={props} /> */}
      {props?.list?.map((button, i) => (
        <ButtonItem
          props={{
            index: i,
            handleClick: handleClick,
            textContent: button.name,
          }}
        />
      ))}
    </Box>
  );
}
