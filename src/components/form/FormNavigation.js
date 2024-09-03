import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';
import ButtonItem from '../button/Button';

export default function FormNavigation({ props, inquirySteps }) {
  const { inquiryStepIndex, setInquiryStepIndex } =
    useContext(PTBalanceContext);

  const isFirstStep = inquiryStepIndex === 0;
  const isLastStep = inquiryStepIndex === inquirySteps.length - 1;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {isFirstStep ? (
        <ButtonItem
          props={{
            // style: { fontFamily: 'Reddit Sans' },
            disabled: isFirstStep ? true : false,
            textContent: isLastStep ? 'Bearbeiten' : 'Zurück',
            // handleClick: () => setInquiryStepIndex(inquiryStepIndex - 1),
          }}
        />
      ) : (
        <ButtonItem
          props={{
            // style: { fontFamily: 'Reddit Sans' },
            disabled: false,
            textContent: isLastStep ? 'Bearbeiten' : 'Zurück',
            handleClick: () => setInquiryStepIndex(inquiryStepIndex - 1),
          }}
        />
      )}

      {!isLastStep ? (
        <ButtonItem
          props={{
            // style: { fontFamily: 'Reddit Sans' },
            disabled: false,
            textContent: 'Weiter',
            handleClick: () => setInquiryStepIndex(inquiryStepIndex + 1),
          }}
          // onClick={() => setInquiryStepIndex(inquiryStepIndex + 1)}
        />
      ) : (
        <ButtonItem
          props={{
            // style: { fontFamily: 'Reddit Sans' },
            type: 'submit',
            disabled: false,
            textContent: 'Abschicken',
            handleClick: () => setInquiryStepIndex(inquiryStepIndex + 1),
            color: 'success',
          }}
          // sx={{ fontFamily: 'Reddit Sans' }}
          // type="submit"
          // variant="contained"
          // size="small"
        />
      )}

      {/* {isLastStep && (
        <Button type="submit" variant="contained">
          Abschicken
        </Button>
      )} */}
    </Box>
  );
}
