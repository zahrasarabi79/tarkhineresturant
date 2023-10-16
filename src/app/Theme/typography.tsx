import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "Estedad, sans-serif",
  h1: {
    fontSize: "44px",
    fontWeight: 700,
    lineHeight: "62px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "60px",
    },
  },
  h2: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "56px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  h3: {
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "77px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "40px",
    },
  },
  h4: {
    fontSize: "34px",
    fontWeight: 400,
    lineHeight: "55px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "32px",
    },
  },
  h5: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "39px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "16px",
    },
  },
  h6: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  body1: {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "36px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  body2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  subtitle2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "12px",
    },
  },
  overline: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "10px",
    },
  },
};

export default typography;
