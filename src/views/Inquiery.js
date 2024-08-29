import { Box, IconButton, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import PTBalanceContext from '../context/PTBalanceContext';
import { Close } from '@mui/icons-material';
import Form from '../components/form/Form';
import dayjs from 'dayjs';

export default function Inquiery() {
  const {
    showForm,
    setShowForm,
    lessonInFocus,
    inquiry,
    setInquiry,
    pickedDateTime,
    setPickedDateTime,
  } = useContext(PTBalanceContext);
  const handleCloseForm = () => {
    setShowForm(!showForm);
  };
  useEffect(() => {
    const newInquiry = { ...inquiry, pickedDateTime: pickedDateTime };
    setInquiry(newInquiry);
    console.log(dayjs(inquiry.pickedDateTime).format('DD-MM-YYYY hh:mm'));
  }, [pickedDateTime]);

  return (
    <Box
      // className="card-background"
      sx={{
        width: '100%',
        maxWidth: '60ch',
        height: 'fit-content',
        // maxHeight: '30rem',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        // backgroundColor: '#dcc6b2',
        boxShadow: '-2px -2px 25px 5px #33343380',
        margin: '0rem 0 3rem 0',
      }}
    >
      <IconButton onClick={handleCloseForm}>
        <Close />
      </IconButton>{' '}
      <Typography
        // className="julius-sans-one-regular "
        variant="h4"
        sx={{
          zIndex: 10,
          position: 'sticky',
          width: '100%',
          top: '0px',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          borderRadius: '5px 5px 0 0',
          backgroundColor: '#dcc6b2',
          // backgroundColor: '#dcc6b2',
          fontFamily: 'Julius Sans One',
        }}
      >
        {lessonInFocus?.headerShort}
      </Typography>
      {lessonInFocus ? (
        <Form handleCloseForm={handleCloseForm} />
      ) : (
        <>Bitte wähle einen Kurs aus.</>
      )}
    </Box>
  );
}
