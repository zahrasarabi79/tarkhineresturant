"use client";
import { Box, Grid, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Icon from "../../shared/CustomIcon/Icon";
import { aboutSectionItems } from "../../../../../public/static-data/aboutSectionItems";
import { IAboutSectionItem } from "@/Interface/Interface";

const AboutSection = () => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isBetweenLargeToSmallScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
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
              <Typography variant={isDownSmallScreen ? "overlineLG" : "h4"} color={"white"} sx={{ pb: 3 }}>
                رستوران‌های زنجیره‌ای هومسا
              </Typography>
              <Typography component={"p"} variant={isDownSmallScreen ? "caption" : "bodyXL"} color={"white"} sx={{ textAlign: "justify" }}>
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای هومسا همواره
                تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ alignItems: "flex-end", textAlign: "end" }}>
            <Button variant="outlined" color="inherit" sx={{ mt: 2, px: 2, width: isDownSmallScreen ? "152px" : "184px", height: isDownSmallScreen ? "32px" : "40px" }}>
              <Stack direction={"row"} gap={1} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant={isDownSmallScreen ? "captionMD" : "buttonLG"}> اطلاعات بیشتر</Typography>
                {!isDownSmallScreen && <Icon pathName="../Icons/Outline/Arrow/arrow-left-2.svg" style={{ margin: "2.5px 0" }} />}
              </Stack>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={isDownLargeScreen ? 12 : 6} sx={{ py: 6, px: isDownLargeScreen ? 6 : 12 }} display={"flex"}>
          <Grid container rowGap={3}>
            {aboutSectionItems.map((aboutSectionItem: IAboutSectionItem, index: number) => (
              <Grid key={index} item xs={isBetweenLargeToSmallScreen ? 3 : 6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Icon pathName={aboutSectionItem.icon} size={isDownSmallScreen ? "24px" : "48px"} />
                <Typography variant={isDownSmallScreen ? "captionMD" : "bodyLG"} color="white" sx={{ mt: 2, whiteSpace: "nowrap" }}>
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
