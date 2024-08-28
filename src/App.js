import { Box } from '@mui/material';
import Footer from './views/Footer';
import Impressum from './views/Impressum';
import Kids from './views/Kids';
import PTBalance from './views/PTBalance';

function App() {
  return (
    <Box
      className="gradient"
      sx={{
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
      {/* <Impressum /> */}
    </Box>
  );
}

export default App;
