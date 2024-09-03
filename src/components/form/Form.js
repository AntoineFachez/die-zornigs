import React, { useContext } from 'react';
import { Box, Button, FormControl } from '@mui/material';
import Divider from '@mui/material/Divider';

import PTBalanceContext from '../../context/PTBalanceContext';

import AppointmentSetter from './AppointmentSetter';
import FormNavigation from './FormNavigation';
import InquirySummary from './InquirySummary';
import MessageBox from './MessageBox';
import UserDetails from './UserDetails';

import './form.css';
import ButtonItem from '../button/Button';
import SideBarNav from './SideBarNav';

export default function Form({ props, onAddEntry }) {
  const { inquiry, setInquiry, inquiryStepIndex, setInquiryStepIndex } =
    useContext(PTBalanceContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const formData = {};
    for (const [key, value] of data.entries()) {
      formData[key] = value;
    }

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

  const inquirySteps = [
    { step: 1, component: <AppointmentSetter />, name: 'Termin' },
    {
      step: 2,
      component: <UserDetails handlePreferedContact={handlePreferedContact} />,
      name: 'Kontakt',
    },
    { step: 3, component: <MessageBox />, name: 'Hinweise' },
    {
      step: 4,
      component: (
        <>
          <InquirySummary />
        </>
      ),
      name: 'Abschicken',
    },
    {
      step: 5,
      component: (
        <>
          <InquirySummary />
        </>
      ),
      name: 'Antwort',
    },
  ];

  return (
    <FormControl
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        // height: '100%',
        // height: 'fit-content',
        display: 'flex',
        flexFlow:
          props.deviceType === 'desktop' ? 'row nowrap' : 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: props.deviceType === 'desktop' ? '1rem' : '',
      }}
    >
      <SideBarNav inquirySteps={inquirySteps} props={props} />
      <Divider orientation="vertical" variant="middle" flexItem />{' '}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          // justifyContent: 'flex-start',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            // transform: 'scale(0.7)',
            width: '30ch',
            height: 'fit-content',
            maxHeight: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
            // justifyContent: 'flex-start',
            // justifyContent: 'space-between',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {inquirySteps[inquiryStepIndex]?.component}
        </Box>
        <FormNavigation inquirySteps={inquirySteps} props={props} />
      </Box>
    </FormControl>
  );
}
