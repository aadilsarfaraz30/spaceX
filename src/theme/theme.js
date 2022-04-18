import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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

export let theme = createTheme({
  breakpoints: breakpoints,
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

theme = responsiveFontSizes(theme, { factor: 3 });
