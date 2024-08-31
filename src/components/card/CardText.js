import { Box, Typography } from '@mui/material';
import React from 'react';

export default function CardText({ props, item, even }) {
  return (
    <Box
      sx={{
        zIndex: props.isPortrait ? 10 : 0,
        position: 'sticky',
        top: '2.4rem',
        width: props.isPortrait ? '100%' : item.imageUrl ? '65%' : '100%',
        height: '100%',
        // height: props.isPortrait ? '100%' : 'fit-content',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10% 0 10% 0',
        // flexFlow: 'column nowrap',
        borderRadius: !item.imageUrl
          ? '0 0 5px 5px'
          : even
          ? '0 0 0 5px'
          : '0 0 5px 0',

        // backgroundColor: '#fff',
        backgroundColor: !item.imageUrl
          ? '#fff'
          : props.isPortrait
          ? '#ffffff77'
          : '#fff',
        border: 'none',
      }}
    >
      <Typography
        // className={!item.imageUrl ? 'active-tile' : 'active-tile-only-text'}
        className={`${
          props.isPortrait
            ? props.isActiveTile
              ? !item.imageUrl
                ? 'active-tile-only-text'
                : 'active-tile'
              : 'active-tile-only-text'
            : 'active-tile-only-text'
        }`}
        variant="body1"
        sx={{
          minWidth: '20ch',
          maxWidth: item.imageUrl ? '30ch' : '70ch',

          display: 'flex',
          flexFlow: 'column nowrap',
          padding: '0 1rem',
          textAlign: item.imageUrl ? 'center' : 'justify',
          float: 'left',
          // color:
          //   //  !item.imageUrl
          //   //   ? 'black'
          //   //   :
          //   props.isActiveTile ? '#333' : '#888',
          borderRadius: '5px',
          fontFamily: 'Reddit Sans',
          border: 'none',
        }}
        dangerouslySetInnerHTML={{
          __html: props.isPortrait ? item.contentShort : item.contentLong,
        }}
      >
        {/* {item.content}{' '} */}
      </Typography>
    </Box>
  );
}
