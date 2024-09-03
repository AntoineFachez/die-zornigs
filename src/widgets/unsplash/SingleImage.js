import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import UIContext from '../../context/UIContext';
import useGetUnsplash from '../../hooks/useGetUnsplash';

export default function SingleImage({ activeSearchTerm, props }) {
  const [images, setImages] = useState();

  return (
    <>
      {images?.results && (
        <img
          src={images?.results[props.index]?.urls?.regular}
          alt=""
          style={{
            //   zIndex: '0',
            //   position: 'absolute',
            //   top: 0,
            //   left: 0,

            width: '100%',
            // maxWidth: '15rem',
            height: '100%',
            // maxHeight: '15rem',
            borderRadius: props.deviceType === 'desktop' ? '5px' : '0',
            border: 'none',
            padding: 0,
            objectFit: 'cover',
          }}
        />
      )}
    </>
  );
}
