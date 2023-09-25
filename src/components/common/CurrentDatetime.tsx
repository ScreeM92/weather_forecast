import  React, { useState , useEffect } from 'react'
import { Typography } from '@mui/material';
import { getDatetime } from '../../utils/datetime.utils';

const CurrentDatetime = () => {
  const [datetime, setDatetime] = useState(getDatetime());

  useEffect(() => {
    const timer = setInterval(() => setDatetime(getDatetime()), 1000);

    return function cleanup() {
      clearInterval(timer);
    } 
  }, []);

  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: 400,
        fontSize: { xs: '12px', sm: '14px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: 0,
        fontFamily: 'Poppins',
      }}
    >
      {datetime}
    </Typography>
  );
};

export default CurrentDatetime;
