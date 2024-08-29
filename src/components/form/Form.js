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

export default function Form({ onAddEntry }) {
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
        height: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem',
      }}
    >
      <SideBarNav inquirySteps={inquirySteps} />
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
            width: '30ch',
            height: '100%',
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
        <FormNavigation inquirySteps={inquirySteps} />
      </Box>
    </FormControl>
  );
}
