import { createTheme } from '@mui/material/styles';

export const projectPurple = '#5051F9';
export const projectBackgroundGrey = '#f3f4f8';
export const projectBackgroundWhite = '#fff';

export const theme = createTheme({
  palette: {
    primary: {
      main: projectPurple
    },
    background: {
      default: projectBackgroundGrey,
      paper: projectBackgroundWhite
    }
  },
  components: {},
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
    h1: {
      color: projectPurple,
      fontWeight: 'bold',
      fontSize: 'clamp(1.5rem, 3.5vw, 10rem)'
    },
    h3: {
      fontWeight: 'bold',
      fontSize: 'clamp(1rem, 2vw, 5rem)'
    },
    body1: {
      fontSize: 'clamp(0.8rem, 1vw, 1.5rem)'
    },
    body2: {
      fontSize: 'clamp(0.8rem, 1vw, 1.5rem)'
    }
  }
});
