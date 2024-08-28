import { Box } from '@mui/material';
import React from 'react';
import ButtonItem from '../button/Button';
import CardAction from './CardAction';

export default function CardImage({ item, even, handleClick }) {
  return (
    <>
      {item.imageUrl && (
        <img
          style={{
            // position: 'absolute',
            width: '100%',
            // maxWidth: '15rem',
            height: '100%',
            maxHeight: '35rem',
            // height: 'auto',
            // float: 'left',
            objectFit: 'cover',
            borderRadius: even ? '0 0 5px 0 ' : '0 0 0 5px',

            // marginTop: '1rem',
          }}
          src={item.imageUrl}
          alt={item?.imageAlt}
        />
      )}
    </>
  );
}
