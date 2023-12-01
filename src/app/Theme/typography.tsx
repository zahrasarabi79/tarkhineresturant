import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bodyXL: React.CSSProperties;
    h7: React.CSSProperties;
    bodyLG: React.CSSProperties;
    bodyMD: React.CSSProperties;
    bodySM: React.CSSProperties;
    captionMD: React.CSSProperties;
    captionLG: React.CSSProperties;
    buttonLG: React.CSSProperties;
    buttonSM: React.CSSProperties;
    overlineLG: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bodyXL?: React.CSSProperties;
    h7?: React.CSSProperties;
    bodyLG?: React.CSSProperties;
    bodyMD?: React.CSSProperties;
    bodySM?: React.CSSProperties;
    captionMD?: React.CSSProperties;
    captionLG?: React.CSSProperties;
    buttonLG?: React.CSSProperties;
    buttonSM?: React.CSSProperties;
    overlineLG?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyXL: true;
    h7: true;
    bodyLG: true;
    bodyMD: true;
    bodySM: true;
    captionMD: true;
    captionLG: true;
    buttonLG: true;
    buttonSM: true;
    overlineLG: true;
  }
}
const typography = {
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
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "140%",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "32px",
    },
  },
  h5: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "140%",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "16px",
    },
  },
  h6: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "140%",
    letterSpacing: "0em",
    textAlign: "left",
  },
  h7: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "180%",
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
    lineHeight: "180%",
    letterSpacing: "0em",
    textAlign: "left",
  },

  overline: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "0em",
    textAlign: "left",
  },
  overlineLG: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "180%",
    letterSpacing: "0em",
    textAlign: "left",
  },
  caption: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "180%",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "10px",
    },
  },
  captionMD: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "180%",
    letterSpacing: "0em",
    textAlign: "left",
  },
  captionLG: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "180%",
    letterSpacing: "0em",
    textAlign: "left",
    "@media (max-width:600px)": {
      fontSize: "10px",
    },
  },
  bodyXL: { fontSize: "20px", fontWeight: 400, lineHeight: "180%", letterSpacing: "0em", textAlign: "left" },
  bodyLG: { fontSize: "18px", fontWeight: 400, lineHeight: "180%", letterSpacing: "0em", textAlign: "left" },
  bodyMD: { fontSize: "16px", fontWeight: 400, lineHeight: "180%", letterSpacing: "0em", textAlign: "left" },
  bodySM: { fontSize: "14px", fontWeight: 400, lineHeight: "180%", letterSpacing: "0em", textAlign: "left" },
  buttonLG: { fontSize: "16px", fontWeight: 500, lineHeight: "180%", letterSpacing: "0em", textAlign: "left" },
  buttonSM: { fontSize: "14px", fontWeight: 500, lineHeight: "24px", letterSpacing: "0em", textAlign: "left" },
};

export default typography;
