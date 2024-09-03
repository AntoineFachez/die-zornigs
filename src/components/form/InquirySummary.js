import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import dayjs from 'dayjs';
import PTBalanceContext from '../../context/PTBalanceContext';
export default function InquirySummary() {
  const {
    lessonInFocus,
    inquiry,
    setInquiry,
    inquiryStepIndex,
    setInquiryStepIndex,
  } = useContext(PTBalanceContext);
  return (
    <>
      {' '}
      <Box
        sx={{
          width: '100%',
          maxWidth: '35ch',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
        // dangerouslySetInnerHTML={{
        //   __html: lessonInFocus?.inquiryResponse
        //     ?.replace(
        //       '<lesson>',
        //       `<div class="spliced">${lessonInFocus?.headerShort}</div>`
        //     )
        //     ?.replace(
        //       '<contact>',
        //       `<strong>${inquiry?.preferedContact}</strong>`
        //     )
        //     ?.replace('\n', ''),
        // }}
      >
        <Typography sx={{ margin: '1rem 0', fontFamily: 'Reddit Sans' }}>
          Hallo {inquiry?.userName.toUpperCase()},
        </Typography>
        <br />
        <Typography sx={{ margin: '1rem 0', fontFamily: 'Reddit Sans' }}>
          {lessonInFocus?.inquiryResponse
            ?.replace(
              '<lesson>',
              `${lessonInFocus?.lessonInInquiryResponse.toUpperCase()}`
            )
            ?.replace(
              '<contact>',
              `${inquiry?.preferedContact.toUpperCase()}`
            )}{' '}
          <br /> Wir klären dann, ob der{' '}
          {dayjs(inquiry.pickedDateTime)
            .locale('de')
            .format(`dddd, DD.MM.YYYY [um] hh:mm`)}{' '}
          passt.
          <br />
          Danke für die Anfrage !
        </Typography>
        <br />
        <Typography sx={{ margin: '1rem 0', fontFamily: 'Reddit Sans' }}>
          Deine Jana Mikuteit
        </Typography>
      </Box>
    </>
  );
}
