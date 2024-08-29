import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';

import AppointmentSetter from './AppointmentSetter';
import UserDetails from './UserDetails';
import MessageBox from './MessageBox';

import './form.css';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
export default function Form({ onAddEntry }) {
  const {
    lessonInFocus,
    inquiry,
    setInquiry,
    inquiryStepIndex,
    setInquiryStepIndex,
  } = useContext(PTBalanceContext);

  // const handleNextStep = () => {
  //   setInquiryStepIndex((prevIndex) => prevIndex + 1);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const formData = {};
    for (const [key, value] of data.entries()) {
      formData[key] = value;
    }
    console.log(data);

    // onAddEntry(formData);

    // Reset the form
    e.target.reset();
  };
  const handlePreferedContact = (preferedContact) => {
    if (inquiry.preferedContact === preferedContact) {
      setInquiry({ ...inquiry, preferedContact: '' });
    } else {
      setInquiry({ ...inquiry, preferedContact: preferedContact });
    }
  };

  const inquireySteps = [
    { step: 1, component: <AppointmentSetter /> },
    {
      step: 2,
      component: <UserDetails handlePreferedContact={handlePreferedContact} />,
    },
    { step: 3, component: <MessageBox /> },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {inquiryStepIndex < inquireySteps.length ? (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {inquireySteps[inquiryStepIndex].component}
            <Box sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
              {inquiryStepIndex > 0 && (
                <Button
                  variant="contained"
                  onClick={() => setInquiryStepIndex(inquiryStepIndex - 1)}
                >
                  Zurück
                </Button>
              )}{' '}
              <Button
                onClick={() => setInquiryStepIndex(inquiryStepIndex + 1)}
                variant="contained"
              >
                Weiter
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            {' '}
            <Typography
              sx={{
                width: '100%',
                maxWidth: '30ch',
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
              <Typography sx={{ marginBottom: '1rem' }}>
                Hallo {inquiry?.userName.toUpperCase()},
              </Typography>
              <br />
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
              <br />
              <Typography sx={{ marginTop: '1rem' }}>
                Deine Jana Mikuteit
              </Typography>
            </Typography>
            <Box sx={{ display: 'flex', flexFlow: 'row nowrap' }}>
              <Button
                variant="contained"
                onClick={() => setInquiryStepIndex(inquiryStepIndex - 1)}
              >
                Zurück
              </Button>
              <Button type="submit" variant="contained">
                Abschicken
              </Button>
            </Box>
          </>
        )}
      </Box>
    </form>
  );
}
