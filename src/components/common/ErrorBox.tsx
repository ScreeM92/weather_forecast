import * as React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { ErrorTypeEnum } from '../../enums/error.enum';

type Props = {
  type: ErrorTypeEnum,
  display?: string,
  justifyContent?: string,
  alignItems?: string,
  margin?: string,
  gap?: string,
  flex?: string,
  width?: string,
  errorMessage?: string,
}

const ErrorBox = ({
  type,
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  margin = '1rem auto',
  gap = '8px',
  flex = 'auto',
  width = 'auto',
  errorMessage = 'Internal error',
}: Props) => {
  return (
    <Box
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      gap={gap}
      flex={flex}
      width={width}
      sx={{
        padding: '1rem',
        flexDirection: { xs: 'column', sm: 'row' },
        color: type === ErrorTypeEnum.INFO ? '#f5a922' : '#DC2941',
        border:
          type === ErrorTypeEnum.INFO ? '1px solid #f5a922' : '1px solid #DC2941',
        borderRadius: 8,
        background:
          type === ErrorTypeEnum.INFO
            ? 'rgba(245, 169, 34, .1)'
            : 'rgba(220, 41, 65, .25)',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 24 }} />
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize:
            type === ErrorTypeEnum.INFO
              ? { xs: 12, sm: 14 }
              : { xs: 14, sm: 16 },
          fontFamily: 'Poppins',
          textAlign: 'center',
        }}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
}

export default ErrorBox;