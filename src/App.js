import { Box } from '@mui/material';

// import Kids from './views/Kids';
import PTBalance from './views/pt-balance/PTBalance';
import { useContext } from 'react';
import AppContext from './context/AppContext';

function App() {
  return (
    <Box
      className="gradient"
      sx={{
        // zIndex: 0,
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333433',
        overflow: 'hidden',
      }}
    >
      <PTBalance />
      {/* <Kids /> */}
    </Box>
  );
}

export default App;
