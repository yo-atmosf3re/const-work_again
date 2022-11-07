import { ThemeProvider } from '@emotion/react';
import { createTheme, Box, AppBar, Toolbar, IconButton, Typography, Container, Grid, Paper } from '@mui/material';
import { cyan } from '@mui/material/colors';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import './scss/app.scss'

const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: '#27272a',
    },
  },
})

function App() {
  return (
    <div className='wrapper'>
      <ThemeProvider theme={theme}>
        <Header />
        <Container fixed>
          <Sidebar />
          <Main />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
