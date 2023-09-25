import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode,
}

const LoadingBox = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <CircularProgress sx={{ color: 'rgba(255,255,255, .8)' }} />
      {children}
    </Box>
  );
}

export default LoadingBox;