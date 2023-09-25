import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SplashIcon from './../assets/sun.png';

const DefaultView = () => {
  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
            width: '100%',
            minHeight: '500px',
        }}
    >
        <Box
            component="img"
            sx={{
                width: { xs: '100px', sm: '120px', md: '140px' }
            }}
            alt="splash-icon"
            src={SplashIcon}
        />
        <Typography
            variant="h4"
            component="h4"
            sx={{
                fontSize: { xs: '12px', sm: '14px' },
                color: 'rgba(255,255,255, .85)',
                fontFamily: 'Poppins',
                textAlign: 'center',
                margin: '2rem 0',
                maxWidth: '80%',
                lineHeight: '22px',
            }}
            >
            Explore current weather data and 5-day forecast of more than 200,000 cities!
        </Typography>
    </Box>
  );
}

export default DefaultView;