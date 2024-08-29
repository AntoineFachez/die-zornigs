import React, { useContext } from 'react';
import { TextField } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';

export default function MessageBox() {
  const { lessonInFocus, inquiry, setInquiry } = useContext(PTBalanceContext);
  console.log(lessonInFocus.messageStimulus);
  return (
    <>
      <fieldset
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderRadius: '5px',
          fontFamily: 'Reddit Sans',
        }}
      >
        <legend>Hast Du noch eine Frage oder Hinweis?</legend>
        <TextField
          className="form-mesage"
          id="outlined-multiline-flexible"
          sx={{ width: '100%', fontFamily: 'Reddit Sans' }}
          // label={
          //   lessonInFocus.messageStimulus
          //     ? lessonInFocus.messageStimulus
          //     : "Schreib' mir"
          // }
          placeholder={
            lessonInFocus.messageStimulus
              ? lessonInFocus.messageStimulus
              : "Schreib' mir"
          }
          multiline
          // maxRows={4}
          rows={11}
          value={inquiry.message}
          onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
        />
      </fieldset>
    </>
  );
}
