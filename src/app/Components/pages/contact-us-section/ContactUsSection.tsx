"use client";
import { Box, Container, Grid, TextField, Stack, useMediaQuery, useTheme, Typography, Button, TextareaAutosize } from "@mui/material";
import React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

import { styled } from "@mui/system";

const ContactUsSection = () => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownsmartScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const StyledTextField = styled(TextField)({
    "& .MuiInputBase-root.MuiOutlinedInput-root": { fontSize: "14px" },
    "& .MuiOutlinedInput-input": { width: "100%", height: "8px" },
    "& .MuiFormLabel-root.MuiInputLabel-root": { color: "white", fontSize: "14px", top: "-5px" },
    "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": { color: "white", top: "5px" },
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      padding: "0px",
      color: "white",

      "& fieldset": {
        borderColor: "#717171",
      },
      "&:hover fieldset": {
        borderColor: "#717171",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#717171",
      },
    },
  });

  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: isDownsmartScreen
          ? "url('/Images/contact-us/contactus-mobile.png')"
          : isDownLargeScreen
          ? "url('/Images/contact-us/contactus-tablet.png')"
          : "url('/Images/contact-us/contactus.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: isDownsmartScreen ? "152px" : "auto",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth={isDownsmartScreen ? "sm" : isDownLargeScreen ? "md" : "lg"}>
        <Grid container sx={{ py: 4 }}>
          <Grid item xs={3}>
            <Typography variant="h5" color={"white"} sx={{ pb: 2 }}>
              دسترسی آسان
            </Typography>
            <Stack sx={{ gap: 2, ml: 2 }}>
              <Typography variant="captionLG" color="white">
                پرسش‌های متداول
              </Typography>
              <Typography variant="captionLG" color="white">
                قوانین ترخینه
              </Typography>
              <Typography variant="captionLG" color="white">
                حریم خصوصی
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" color={"white"} sx={{ pb: 2 }}>
              شعبه‌های ترخینه
            </Typography>
            <Stack sx={{ gap: 2, ml: 2 }}>
              <Typography variant="captionLG" color="white">
                شعبه اکباتان
              </Typography>
              <Typography variant="captionLG" color="white">
                شعبه چالوس
              </Typography>
              <Typography variant="captionLG" color="white">
                شعبه اقدسیه
              </Typography>
              <Typography variant="captionLG" color="white">
                شعبه ونک
              </Typography>
            </Stack>
          </Grid>
          {!isDownMediumScreen && (
            <Grid item xs={6}>
              <Typography variant="h5" color={"white"} sx={{ pb: 2 }}>
                پیام به ترخینه
              </Typography>
              <Grid container columnSpacing={3}>
                <Grid item xs={6}>
                  <Stack gap={2}>
                    <StyledTextField label="نام و نام خانوادگی" variant="outlined" />
                    <StyledTextField label="شماره تماس" variant="outlined" />
                    <StyledTextField label="ایمیل(اختیاری)" variant="outlined" />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    label="پیام شما"
                    multiline
                    sx={{ width: "100%", "& .MuiOutlinedInput-input": { height: "120px !important", p: 2 }, "& .MuiFormLabel-root.MuiInputLabel-root": { top: "3px" } }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "end", pt: 2 }}>
                  <Button variant="outlined" color={"inherit"} sx={{ width: "183px", height: "40px", fontSize: theme.typography.button, color: "#717171" }}>
                    ارسال پیام
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
