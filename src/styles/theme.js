import { blue } from '@mui/material/colors';

export const theme = {
  font: {
    family: `'Manrope', sans-serif`,
    size: '14px',
  },
  colors: {
    gray: 'rgba(18, 20, 23, 0.5)',
    grayLighter: '#ececec',
    blue: '#3470FF',
    blueDarker: '#0b44cd',
    blue50: blue[50],
    blue100: blue[100],
    textMain: '#242424',
    textButton: 'whitesmoke',
    bgMain: 'white',
    bgButton: '#3470ff',
    bgButtonHover: '#0b44cd',
  },
  transition: {
    duration: '250ms',
    func: 'ease',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
  },
};
