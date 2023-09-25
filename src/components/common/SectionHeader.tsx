import React from 'react';
import { Typography } from '@mui/material';

type Props = {
  title: string,
  mb?: string,
}

const SectionHeader = ({ title, mb = '1rem' }: Props) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      sx={{
        fontSize: { xs: 12, sm: 16, md: 18 },
        color: 'rgba(255,255,255,.7)',
        fontWeight: '600',
        lineHeight: 1,
        textAlign: 'center',
        fontFamily: 'Roboto Condensed',
        marginBottom: mb,
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
