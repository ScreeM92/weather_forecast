
import './App.css';
import React from 'react';
import { Container, Grid, } from '@mui/material';
import Home from './components/Home';

function App() {
  return (
    <Container
      sx={{
        maxWidth: { xs: '95%', sm: '80%', md: 1100 },
        width: '100%',
        height: '100%',
        margin: '0 auto',
        padding: '1rem 0 3rem',
        marginBottom: '1rem',
        borderRadius: {
          xs: 'none',
          sm: '0 0 1rem 1rem',
        },
        boxShadow: {
          xs: 'none',
          sm: 'rgba(89,170,231, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
        },
      }}
    >
      <Grid container columnSpacing={2}>
        <Home />
      </Grid>
    </Container>
  );
}

export default App;
