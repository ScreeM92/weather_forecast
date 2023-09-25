import * as React from 'react';
import Box from '@mui/material/Box';
import LoadingBox from './LoadingBox';
import { Typography } from '@mui/material';

const LoadingWrapper = () => {
  return (
    <Box
        sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 500,
        }}
    >
        <LoadingBox>
        <Typography
            variant="h3"
            component="h3"
            sx={{
            fontSize: { xs: 10, sm: 12 },
            color: 'rgba(255, 255, 255, .8)',
            lineHeight: 1,
            fontFamily: 'Poppins',
            }}
        >
            Loading...
        </Typography>
        </LoadingBox>
    </Box>
  );
}

export default LoadingWrapper;