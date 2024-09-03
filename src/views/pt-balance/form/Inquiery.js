import React, { useContext, useEffect } from 'react';
// import dayjs from 'dayjs';
import { Box, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

import PTBalanceContext from '../../../context/PTBalanceContext';

import Form from '../../../components/form/Form';
import SubTitle from '../../../components/titles/SubTitle';
import { subTitleStyles } from '../../../theme/stylesData';

export default function Inquiery({ props }) {
  const {
    setAppState,
    // showForm,
    // setShowForm,
    lessonInFocus,
    inquiry,
    setInquiry,
    pickedDateTime,
    // setPickedDateTime,
  } = useContext(PTBalanceContext);
  const handleCloseForm = () => {
    setAppState('main');
  };
  useEffect(() => {
    const newInquiry = { ...inquiry, pickedDateTime: pickedDateTime };
    setInquiry(newInquiry);
  }, [pickedDateTime]);

  return (
    <Box
      // className="card-background"
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: props.deviceType === 'desktop' ? '60ch' : '100%',
        // height: 'fit-content',
        height: props.deviceType === 'desktop' ? '30rem' : '100%',
        // maxHeight: '30rem',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '5px',
        // backgroundColor: '#dcc6b2',
        boxShadow: '-2px -2px 25px 5px #33343380',
        margin:
          props.deviceType === 'desktop' ? '0rem 0 3rem 0' : '3rem 0 4rem 0',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // maxWidth: '60ch',
          // height: 'fit-content',
          height: '3rem',
          // maxHeight: '30rem',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderRadius: '5px 5px 0 0',
          backgroundColor: '#dcc6b2',
        }}
      >
        <IconButton
          sx={{ zIndex: '100', position: 'absolute', top: '0', left: '0' }}
          onClick={handleCloseForm}
        >
          <Close fontSize="inherit" />
        </IconButton>{' '}
        <SubTitle
          props={{
            content: lessonInFocus?.headerShort,
            variant: props.deviceType === 'desktop' ? 'h5' : 'body1',
            subTitleStyles: {
              ...subTitleStyles,
              // zIndex: 10,
              // // position: 'absoulte',
              // // left: '50%',
              // // right: '50%',
              // // width: '100%',
              // top: '0px',
              // display: 'flex',
              // flexFlow: 'column nowrap',
              // justifyContent: 'center',
              // alignItems: 'center',
              // // color: 'black',
              // // backgroundColor: '#dcc6b2',
              // fontFamily: 'Julius Sans One',
            },
          }}
        />
      </Box>

      {/* <Typography
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
      </Typography> */}
      {lessonInFocus ? (
        <Form handleCloseForm={handleCloseForm} props={props} />
      ) : (
        <Typography sx={{ fontFamily: 'Reddit Sans' }}>
          Bitte wähle einen Kurs aus.
        </Typography>
      )}
    </Box>
  );
}
