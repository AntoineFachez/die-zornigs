import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CardText from './CardText';
import CardAction from './CardAction';
import ListInSection from '../section/ListInSection';
import { getImagesByQuery } from '../../widgets/unsplash/unsplashApi';

export default function CardBody({
  props,
  index,
  item,
  activeTile,
  even,
  handleClick,
}) {
  const [error, setError] = useState([]);
  const [randomIndexOf10, setRandomIndexOf10] = useState(9);
  const [randomIndexOfListLength, setRandomIndexOfListLength] = useState(0);
  const activeSearchTerm = item?.list?.[randomIndexOfListLength]?.searchTerm;
  const [images, setImages] = useState(
    JSON.parse(localStorage.getItem(`images: ${activeSearchTerm}`)) || []
  );

  useEffect(() => {
    setRandomIndexOf10(Math.floor(Math.random() * 10));
    // Ensure randomIndexOfListLength is within valid bounds
    setRandomIndexOfListLength(
      Math.floor(Math.random() * (item?.list?.length || 0))
    );

    if (activeSearchTerm && images.length === 0) {
      // Fetch images without setTimeout
      (async () => {
        const data = await getImagesByQuery(activeSearchTerm, setError, error);
        setImages(data);
        localStorage.setItem(
          `images: ${activeSearchTerm}`,
          JSON.stringify(data)
        );
      })();
    }

    return () => {};
  }, [item, props, activeSearchTerm]);

  const imageUrl = item?.imageUrl
    ? item.imageUrl
    : images?.results?.[randomIndexOf10]?.urls?.regular;
  return (
    <Box
      className={`${
        props.isActiveTile
          ? !item.imageUrl
            ? 'active-tile-only-text'
            : 'active-tile'
          : 'inactive-tile'
      }`}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',

        display: 'flex',
        flexFlow: even ? 'row nowrap' : 'row-reverse nowrap',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: props.isActiveTile ? '#dcc6b266' : '#33343360',
      }}
    >
      <CardText
        props={props}
        item={{ ...item, imageUrl: imageUrl }}
        even={even}
      />
      <Box
        sx={{
          position: props.isPortrait ? 'absolute' : 'sticky',
          top: props.isPortrait ? '0' : '0rem',
          width: props.isPortrait ? '100%' : 'auto',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            zIndex: 100,
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          {item.list ? (
            <ListInSection props={item} />
          ) : (
            <CardAction handleClick={handleClick} even={even} />
          )}
          {/* {props.isPortrait && (
            <img
              style={{
                filter: 'blur(2px)',
                borderRadius: even ? '0 0 5px 0 ' : '0 0 0 5px',

                border: !item.imageUrl && 'solid transparent 1px',
              }}
              src={item.imageUrl}
              alt={item?.imageAlt}
            />
          )}{' '} */}
        </Box>
        {/* {!props.isPortrait && ( */}
        {
          <img
            style={{
              filter: props.isPortrait && 'blur(2px) brightness(0.5)',
              // opacity: '0.4',
              zIndex: 'auto',
              display: props.isPortrait ? 'absolute' : 'sticky',
              top: props.isPortrait ? '50%' : '0rem',
              // width: '100%',
              width: props.isPortrait ? 'auto' : '100%',
              minWidth: '40ch',
              height: '100%',
              // height: props.isPortrait ? 'auto' : '100%',

              // minHeight: '20rem',
              // maxHeight: '45rem',
              margin: 'auto',
              // display: 'block',
              objectFit: props.isPortrait ? 'cover' : 'cover',
              // objectFit: 'cover',

              borderRadius: even ? '0 0 5px 0 ' : '0 0 0 5px',

              border: !imageUrl && 'solid transparent 1px',
            }}
            src={imageUrl}
            alt={'imageUrl'}
          />
        }
        {/* )} */}
      </Box>
    </Box>
  );
}
