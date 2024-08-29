import React, { useContext } from 'react';
import { TextField } from '@mui/material';

import PTBalanceContext from '../../context/PTBalanceContext';

export default function MessageBox() {
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
        <legend>Hast Du noch eine Frage oder Hinweis?</legend>
        <TextField
          className="form-mesage"
          id="outlined-multiline-flexible"
          sx={{ width: '100%' }}
          label="Schreib' mir"
          multiline
          // maxRows={4}
          rows={4}
          value={inquiry.message}
          onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
        />
      </fieldset>
    </>
  );
}
