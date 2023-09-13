import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontFamily: "'Glory', sans-serif",
  },
  components: {
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: 600,
        },
        h5: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h2: {
          fontWeight: 600,
        },
        h1: {
          fontWeight: 600,
        },
      },
    },
  },

  palette: {
    background: {
      default: '#1a1b1f',
      paper: '#f5c89e',
    },
    divider: '#f5c89e',
    text: {
      primary: '#272a30',
      secondary: '#c9864f',
      disabled: '#9B9B9B',
    },
    primary: {
      light: '#f5c89e',
      main: '#f5c89e',
      dark: '#272a30',
    },
    secondary: {
      light: '#FCDB88',
      main: '#FAC748',
      dark: '#C79005',
    },
    error: {
      main: '#FF1053',
      light: '#FFADC5',
      dark: '#B80037',
    },
    info: {
      light: '#B4C1F8',
      main: '#4361EE',
      dark: '#102CA8',
    },
    success: {
      main: '#36AB47',
    },
  },
});
