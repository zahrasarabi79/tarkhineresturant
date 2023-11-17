import { Components, keyframes } from "@mui/material";

// const wave = keyframes`
//   from {
//     opacity:0;
//     transform: translate(-10px)
//   }
//   to {
//     opacity:1;
//     transform: translate(0px)
//   }
// `;
const components: Components = {
  MuiAppBar: {
    styleOverrides: {
      root: { boxShadow: "none" },
      colorPrimary: {
        backgroundColor: "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: { padding: "8px 16px" },
    },
  },
  // MuiAlertTitle: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "16px",
  //       fontWeight: 400,
  //       lineHeight: "26px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "14px",
  //       },
  //     },
  //   },
  // },
  // MuiAvatar: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "20px",
  //       fontWeight: 400,
  //       lineHeight: "32px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //     },
  //   },
  // },
  // MuiBadge: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "12px",
  //       fontWeight: 400,
  //       lineHeight: "19px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "10px",
  //       },
  //     },
  //   },
  // },
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
      sizeMedium: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "28px",
        letterSpacing: "0em",
        padding: "8px 16px",
        textAlign: "center",
        borderRadius: "8px",
        color: "white",
        "@media (max-width:900px)": {
          fontSize: "10px",
          fontWeight: 400,
          lineHeight: "18px",
          letterSpacing: "0em",
          padding: "8px",
          borderRadius: "4px",
        },
      },
      sizeLarge: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "23px",
        letterSpacing: "0em",
        textAlign: "left",
        "@media (max-width:600px)": {
          fontSize: "12px",
        },
      },
      sizeSmall: {
        borderRadius: "4px",
        padding: "8px",
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "21px",
        letterSpacing: "0em",
        textAlign: "left",
        "@media (max-width:600px)": {
          fontSize: "11px",
        },
      },
    },
  },
  // MuiTextField: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "16px",
  //       fontWeight: 400,
  //       lineHeight: "26px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "13px",
  //       },
  //     },
  //   },
  // },
  // MuiFormHelperText: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "12px",
  //       fontWeight: 400,
  //       lineHeight: "20px",
  //       letterSpacing: "0.4px",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "10px",
  //       },
  //     },
  //   },
  // },
  // MuiChip: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "13px",
  //       fontWeight: 400,
  //       lineHeight: "18px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "11px",
  //       },
  //     },
  //   },
  // },
  // MuiTooltip: {
  //   styleOverrides: {
  //     tooltip: {
  //       fontSize: "10px",
  //       fontWeight: 400,
  //       lineHeight: "14px",
  //       letterSpacing: "0em",
  //       borderRadius: "4px",
  //       padding: "8px",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "8px",
  //       },
  //     },
  //   },
  // },
  // MuiTableHead: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "14px",
  //       fontWeight: 700,
  //       lineHeight: "23px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       backgroundColor: "rgba(255, 255, 255, 0.10)",
  //       "@media (max-width:600px)": {
  //         fontSize: "12px",
  //       },
  //     },
  //   },
  // },
  // MuiMenuItem: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "16px",
  //       fontWeight: 400,
  //       lineHeight: "26px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //     },
  //     dense: {
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       lineHeight: "23px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "12px",
  //       },
  //     },
  //   },
  // },

  // MuiListSubheader: {
  //   styleOverrides: {
  //     root: {
  //       fontSize: "14px",
  //       fontWeight: 400,
  //       lineHeight: "23px",
  //       letterSpacing: "0em",
  //       textAlign: "left",
  //       "@media (max-width:600px)": {
  //         fontSize: "13px",
  //       },
  //     },
  //   },
  // },
  // MuiBottomNavigationAction: {
  //   styleOverrides: {
  //     label: {
  //       ":active": {
  //         fontSize: "14px",
  //         fontWeight: 400,
  //         lineHeight: "23px",
  //         letterSpacing: "0em",
  //         textAlign: "left",
  //         "@media (max-width:600px)": {
  //           fontSize: "12px",
  //         },
  //       },
  //     },
  //   },
  // },

  // MuiAutocomplete: {
  //   styleOverrides: {
  //     listbox: {
  //       "&::-webkit-scrollbar": {
  //         width: "4px",
  //       },
  //       "&::-webkit-scrollbar-track": {
  //         backgroundColor: "#555555",
  //       },
  //       "&::-webkit-scrollbar-thumb": {
  //         backgroundColor: "#888",
  //         borderRadius: "4px",
  //       },
  //       "&::-webkit-scrollbar-thumb:hover": {
  //         backgroundColor: "#555",
  //       },
  //     },
  //   },
  // },

  // ... other components ...

  // MuiCardHeader: {
  //   styleOverrides: {
  //     action: {
  //       marginTop: 2,
  //       marginRight: 1,
  //     },
  //   },
  // },
  // MuiCard: {
  //   styleOverrides: {
  //     root: {
  //       animation: `${wave} 0.3s linear alternate`,
  //     },
  //   },
  // },
  // MuiTable: {
  //   styleOverrides: {
  //     root: {
  //       animation: `${wave} 0.3s linear alternate`,
  //     },
  //   },
  // },
};

export default components;
