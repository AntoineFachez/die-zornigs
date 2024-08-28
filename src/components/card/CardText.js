import { Box, Typography } from '@mui/material';
import React from 'react';

export default function CardText({ item, even }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '2.4rem',
        width: item.imageUrl ? '65%' : '100%',
        height: 'fit-content',
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
        backgroundColor: '#fff',
      }}
    >
      <Typography
        // className="reddit-sans-thin"
        variant="body1"
        sx={{
          minWidth: '20ch',
          maxWidth: item.imageUrl ? '30ch' : '70ch',

          display: 'flex',
          flexFlow: 'column nowrap',
          padding: '0 1rem',
          textAlign: item.imageUrl ? 'center' : 'justify',
          float: 'left',
          color: 'black',
          borderRadius: '5px',
          fontFamily: 'Reddit Sans',
        }}
        dangerouslySetInnerHTML={{ __html: item.content }}
      >
        {/* {item.content}{' '} */}
      </Typography>
      {/* <Button
          handleClick={handleClick}
          sx={{ position: 'sticky', top: '3rem' }}
        />{' '} */}
    </Box>
  );
}
