import React, { useContext } from 'react';
import { Box, TextField } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';

export default function UserDetails({ handlePreferedContact }) {
  const { inquiry, setInquiry } = useContext(PTBalanceContext);
  return (
    <fieldset
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '5px',
        gap: '2rem',
      }}
    >
      <legend>Deine Daten</legend>
      <TextField
        label={inquiry.userName ? 'Name' : 'Wie willst Du Dich nennen?'}
        placeholder="Name"
        // variant="outlined"
        sx={{
          width: '100%',
          textAlign: 'center',
          color: 'white',
        }}
        size="small"
        className="form-input"
        type="text"
        name="user-name"
        id=""
        value={inquiry.userName}
        onChange={(e) => setInquiry({ ...inquiry, userName: e.target.value })}
      />

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
            width: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <TextField
            required
            label="Email"
            sx={{
              width: '100%',
              fontFamily: 'Reddit Sans',
            }}
            size="small"
            className="form-input"
            type="email"
            name="enter-email"
            id=""
            value={inquiry.email}
            onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
          />
          <TextField
            required
            label="Mobile"
            sx={{
              width: '100%',
              fontFamily: 'Reddit Sans',
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
      <legend>Wie soll ich Kontakt aufnehmen?</legend>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Email
          {inquiry.email && (
            <input
              type="checkbox"
              id="preferenceContactEmail"
              name="preferenceContactEmail"
              onChange={(e) => handlePreferedContact('email')}
              checked={inquiry.preferedContact === 'email' ? true : false}
            />
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Telefon
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
      </Box>
      {/* </fieldset> */}
    </fieldset>
  );
}
