import React, { useState, useEffect, useContext, memo } from 'react';
import { Box } from '@mui/material';
// import DevContext from '../../context/DevContext';
import UIContext from '../../context/UIContext';
import SearchContext from '../../context/SearchContext';
import { getImagesByQuery } from './unsplashApi';
import useGetUnsplash from '../../hooks/useGetUnsplash';

const ImageCaroussell = memo(({ activeSearchTerm, styledComponent }) => {
  const [error, setError] = useState([]);
  // const { devErrorArray, setDevErrorArray } = useContext(DevContext);
  // const { activeSearchTerm } = useContext(SearchContext);
  const {
    queryUnsplash,
    setQueryUnsplash,
    images,
    setImages,
    setSelectedImage,
  } = useContext(UIContext);
  setImages(useGetUnsplash(activeSearchTerm));
  console.log(images);

  // useEffect(() => {
  //   setQueryUnsplash(activeSearchTerm);
  //   // console.log(activeSearchTerm);
  // }, [activeSearchTerm, setQueryUnsplash]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     getImagesByQuery(activeSearchTerm, setImages, error);
  //   }, 3000);
  // }, [
  //   !activeSearchTerm === undefined ||
  //     images === undefined ||
  //     images.length === 0,
  // ]);

  // useEffect(() => {
  //   const lsItemName = 'images: ' + activeSearchTerm;
  //   localStorage.setItem(lsItemName, JSON.stringify(images));
  //   return () => {};
  // }, [images]);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      {images?.results?.map((image) => (
        <img
          style={{
            width: '100%',
            height: '90%',
            objectFit: 'cover',
          }}
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          onClick={(d) => handleSelectImage(image)}
        />
      ))}
    </>
  );
});
export default ImageCaroussell;
