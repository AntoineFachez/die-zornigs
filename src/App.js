import logo from './logo.svg';
import './App.css';
import Kids from './views/Kids';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      className="App"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
      }}
    >
      <Kids />
    </Box>
  );
}

export default App;
