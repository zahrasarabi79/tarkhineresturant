"use client";
import { Box, Grid, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Icon from "../../CustomIcon/Icon";
const aboutSectionItems = [
  { icon: "../Icons/Bold/Business/diagram.svg", title: "کیفیت بالای غذاها" },
  { icon: "../Icons/Bold/Users/user.svg", title: "پرسنلی مجرب و حرفه‌ای" },
  { icon: "../Icons/Outline/Essetional/home-wifi.svg", title: "محیطی دلنشین و آرام" },
  { icon: "../Icons/Outline/Content-Edit/menu-board.svg", title: "منوی متنوع" },
];
const AboutSection = () => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: "url('Images/about/about-section.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid item xs={isDownLargeScreen ? 12 : 6} sx={{ py: 6, px: isDownLargeScreen ? 3 : 12 }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant={isDownLargeScreen ? "overlineLG" : "h4"} color={"white"} sx={{ pb: 3 }}>
                رستوران‌های زنجیره‌ای ترخینه
              </Typography>
              <Typography component={"p"} variant={isDownLargeScreen ? "caption" : "bodyXL"} color={"white"} sx={{ textAlign: "justify" }}>
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه
                همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ alignItems: "flex-end", textAlign: "end" }}>
            <Button variant="outlined" color="inherit" sx={{ mt: 2, px: 2, width: isDownLargeScreen ? "152px" : "184px", height: isDownLargeScreen ? "32px" : "40px" }}>
              <Stack direction={"row"} gap={1} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant={isDownLargeScreen ? "captionMD" : "buttonLG"}> اطلاعات بیشتر</Typography>
                {!isDownLargeScreen && <Icon pathName="../Icons/Outline/Arrow/arrow-left-2.svg" style={{ margin: "2.5px 0" }} />}
              </Stack>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={isDownLargeScreen ? 12 : 6} sx={{ py: 6, px: isDownLargeScreen ? 6 : 12 }} display={"flex"}>
          <Grid container rowGap={3}>
            {aboutSectionItems.map((aboutSectionItem) => (
              <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Icon pathName={aboutSectionItem.icon} size={isDownLargeScreen ? "24px" : "48px"} />
                <Typography variant={isDownLargeScreen ? "captionMD" : "bodyLG"} color="white" sx={{ mt: 2, whiteSpace: "nowrap" }}>
                  {aboutSectionItem.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
