import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import UIContext from '../../context/UIContext';
import useGetUnsplash from '../../hooks/useGetUnsplash';
import { getImagesByQuery } from './unsplashApi';

export default function SingleImage({ activeSearchTerm, props }) {
  const [error, setError] = useState([]);
  const [images, setImages] = useState();

  // const tempImages = useGetUnsplash(activeSearchTerm, images, setImages);
  useEffect(() => {
    setTimeout(async () => {
      const data = await getImagesByQuery(activeSearchTerm, setError, error);
      setImages(data);
    }, 30);
    console.log(images?.results[0]?.urls?.regular);

    return () => {};
  }, []);

  return (
    <>
      {images?.results && (
        <img
          // src={images?.results[props.index]?.urls?.regular}
          src={images?.results[0]?.urls?.regular}
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
