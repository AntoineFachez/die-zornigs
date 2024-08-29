import React, { useContext } from 'react';
import { Box, TextField } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';

export default function UserDetails({ handlePreferedContact }) {
  const { inquiry, setInquiry } = useContext(PTBalanceContext);
  return (
    <>
      <fieldset
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <legend>Wie willst Du Dich nennen?</legend>
        <TextField
          label="Name"
          variant="outlined"
          sx={{ textAlign: 'center' }}
          size="small"
          className="form-input"
          type="text"
          name="user-name"
          id=""
          value={inquiry.userName}
          onChange={(e) => setInquiry({ ...inquiry, userName: e.target.value })}
        />
      </fieldset>{' '}
      <fieldset
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <legend>Wie soll ich in Kontakt treten?</legend>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
          }}
        >
          <Box
            sx={{
              width: 'fit-content',
              height: '100%',
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'space-around',
            }}
          >
            {inquiry.email && (
              <input
                type="checkbox"
                id="preferenceContactEmail"
                name="preferenceContactEmail"
                onChange={(e) => handlePreferedContact('email')}
                checked={inquiry.preferedContact === 'email' ? true : false}
              />
            )}
            {inquiry.mobileNumer && (
              <input
                type="checkbox"
                id="preferenceContactMobil"
                name="preferenceContactMobil"
                onChange={(e) => handlePreferedContact('mobil')}
                checked={inquiry.preferedContact === 'mobil' ? true : false}
              />
            )}
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <TextField
              required
              label="Email"
              sx={{
                maxWidth: '25ch',
              }}
              size="small"
              className="form-input"
              type="email"
              name="enter-email"
              id=""
              value={inquiry.email}
              onChange={(e) =>
                setInquiry({ ...inquiry, email: e.target.value })
              }
            />
            <TextField
              required
              label="Mobile"
              sx={{
                maxWidth: '25ch',
              }}
              size="small"
              className="form-input"
              type="text"
              name="enter-number"
              id=""
              value={inquiry.mobileNumer}
              onChange={(e) =>
                setInquiry({ ...inquiry, mobileNumer: e.target.value })
              }
            />
          </Box>
        </Box>
      </fieldset>
    </>
  );
}
