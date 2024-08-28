import React, { useContext } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import PTBalanceContext from '../../context/PTBalanceContext';
import BasicDateCalendar from '../../components/calendar/Calendar';

import './form.css';

export default function Form({ handleCloseForm }) {
  const { lessonInFocus, setLessonInFocus, inquiry, setInquiry } =
    useContext(PTBalanceContext);
  const handleSubmit = () => {
    console.log('trigger submit');
  };
  const handlePreferedContact = (preferedContact) => {
    if (inquiry.preferedContact === preferedContact) {
      setInquiry({ ...inquiry, preferedContact: '' });
    } else {
      setInquiry({ ...inquiry, preferedContact: preferedContact });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        // className="card-background"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          // borderRadius: '5px',
          // backgroundColor: '#dcc6b2',
          // boxShadow: '-2px -2px 25px 5px #33343380',
          // margin: '0rem 0 3rem 0',
        }}
      >
        {' '}
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
          {' '}
          {/* <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          > */}
          <fieldset
            style={{
              width: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <legend>Wie willst Du Dich nennen?</legend>{' '}
            {/* <label htmlFor="user-name">Name: </label> */}
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
              onChange={(e) =>
                setInquiry({ ...inquiry, userName: e.target.value })
              }
            />
          </fieldset>{' '}
          {/* </Box> */}
          <fieldset
            style={{
              width: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {' '}
            <legend>Wie soll ich in Kontakt treten?</legend>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
              }}
            >
              {/* <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexFlow: 'column nowrap',

                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <label htmlFor="enter-number">Deine MobilNummer: </label>
                <label htmlFor="enter-email">Deine Email: </label>
              </Box> */}
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
          <fieldset
            style={{
              width: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {' '}
            <legend>Dein Wunschtermin für Dein Probetraining:</legend>{' '}
            {/* <label htmlFor="preferedDate">Dein Wunschtermin: </label> */}
            <BasicDateCalendar />{' '}
            {/* <TextField
              size="small"
              className="form-input"
              type="date"
              name="preferedDate"
              id=""
              value={inquiry.preferedDate}
              onChange={(e) =>
                setInquiry({ ...inquiry, preferedDate: e.target.value })
              }
            /> */}
          </fieldset>
        </Box>
        {/* <label htmlFor="message">Hast Du noch eine Frage oder Hinweis? </label> */}
        <fieldset
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {' '}
          <legend>Hast Du noch eine Frage oder Hinweis?</legend>{' '}
          <TextField
            className="form-mesage"
            id="outlined-multiline-flexible"
            sx={{ width: '100%' }}
            label="Schreib' mir"
            multiline
            // maxRows={4}
            rows={4}
            value={inquiry.message}
            onChange={(e) =>
              setInquiry({ ...inquiry, message: e.target.value })
            }
          />{' '}
        </fieldset>
        {/* <textarea
          style={{ maxWidth: '50ch', height: '100%' }}
          className="form-mesage"
          type="text"
          name="message"
          id=""
          value={inquiry.message}
          onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
        /> */}
      </Box>
    </form>
  );
}
