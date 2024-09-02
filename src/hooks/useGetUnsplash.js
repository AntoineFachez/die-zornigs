import { useState, useEffect, useContext } from 'react';
import { getImagesByQuery } from '../widgets/unsplash/unsplashApi';
import UIContext from '../context/UIContext';

function useGetUnsplash(activeSearchTerm, images, setImages) {
  const [error, setError] = useState([]);
  console.log(activeSearchTerm);

  const {
    queryUnsplash,
    setQueryUnsplash,
    // images,
    // setImages,
    setSelectedImage,
  } = useContext(UIContext);

  useEffect(() => {
    setQueryUnsplash(activeSearchTerm);
  }, [activeSearchTerm, setQueryUnsplash]);

  useEffect(() => {
    setTimeout(async () => {
      const data = await getImagesByQuery(activeSearchTerm, setError, error);
      // console.log(data);
      setImages(data);
    }, 30);
  }, [
    !activeSearchTerm === undefined,
    // images === undefined ||
    // images.length === 0,
  ]);

  useEffect(() => {
    const lsItemName = 'images: ' + activeSearchTerm;
    localStorage.setItem(lsItemName, JSON.stringify(images));
    return () => {};
  }, [images]);
  return images;
}
export default useGetUnsplash;
