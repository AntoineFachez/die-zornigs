import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';

import AppointmentSetter from './AppointmentSetter';
import UserDetails from './UserDetails';
import MessageBox from './MessageBox';

import './form.css';

export default function Form({ onAddEntry }) {
  const {
    lessonInFocus,
    inquiry,
    setInquiry,
    inquiryStepIndex,
    setInquiryStepIndex,
  } = useContext(PTBalanceContext);

  const handleNextStep = () => {
    setInquiryStepIndex((prevIndex) => prevIndex + 1);
  };
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
    { step: 1, component: <UserDetails /> },
    { step: 2, component: <AppointmentSetter /> },
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
                alignItems: 'center',
              }}
              dangerouslySetInnerHTML={{
                __html: lessonInFocus?.inquiryResponse
                  ?.replace(
                    '<lesson>',
                    `<div class="spliced">${lessonInFocus?.headerShort}</div>`
                  )
                  ?.replace(
                    '<contact>',
                    `<strong>${inquiry?.preferedContact}</strong>`
                  )
                  ?.replace('\n', ''),
              }}
            />
            <Typography>
              und klären ob der {inquiry.preferedDate} passt.
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
