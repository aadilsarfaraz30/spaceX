import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return <Box sx={{ display: 'flex', justifyContent: 'center',width: '100vw',height: '80vh',alignItems: 'center' }}>
  <CircularProgress />
</Box>;
};

export default Loading;
