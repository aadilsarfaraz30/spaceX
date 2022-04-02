import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    mobile: 320,
    mediumMobile: 375,
    largeMobile: 425,
    tablet: 768,
    laptop: 1024,
    largeLaptop: 1440,
    desktop: 1920,
  },
};

export const theme = createTheme({
  breakpoints: breakpoints,
  typography: {
    fontFamily: 'Roboto Mono', 
    h4: {
      marginBottom: '2px',
      [`@media screen and (max-width: ${breakpoints.values.largeMobile}px)`]: {
        fontSize: "25px",
      },
      [`@media screen and (max-width: ${breakpoints.values.mediumMobile}px)`]: {
        fontSize: "20px",
      },
     
    },
    h5: {
      [`@media screen and (max-width: ${breakpoints.values.largeMobile}px)`]: {
        fontSize: "20px",
      },
      [`@media screen and (max-width: ${breakpoints.values.mediumMobile}px)`]: {
        fontSize: "18px",
      },
      [`@media screen and (max-width: ${breakpoints.values.mobile}px)`]: {
        fontSize: "18px",
      },
    },
    h6 : {
      [`@media screen and (max-width: ${breakpoints.values.largeMobile}px)`]: {
        fontSize: "14px",
      },
      
    },
    subtitle1: {
      fontSize: '20px',
      [`@media screen and (max-width: ${breakpoints.values.largeLaptop}px)`]: {
        fontSize: "16px",
      },
      [`@media screen and (max-width: ${breakpoints.values.largeMobile}px)`]: {
        fontSize: "14px",
      },
      [`@media screen and (max-width: ${breakpoints.values.mediumMobile}px)`]: {
        fontSize: "12px",
      }
    },
    
  },
  
});
