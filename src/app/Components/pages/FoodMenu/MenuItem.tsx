"use client";
import { IFoodMenuItemProps } from "@/Interface/Interface";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const FoodMenuItem: React.FC<IFoodMenuItemProps> = ({ menuImage, titleBtn }) => {
  const theme = useTheme();
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownsmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={isDownMediumScreen ? 6 : 3} position={"relative"}>
      <Image
        alt={titleBtn}
        src={menuImage}
        width={isDownsmallScreen ? 102 : isDownLargeScreen ? 160 : 180}
        height={isDownsmallScreen ? 102 : isDownLargeScreen ? 160 : 180}
        style={{ position: "relative", top: "30%", left: "-50%", transform: "translateX(50%)", marginTop: isDownsmallScreen ? "-102px" : "-60px" }}
      />

      <Box sx={{ border: "1px solid rgb(65,127,86)", borderRadius: 1, px: 1, height: isDownsmallScreen ? "80px" : isDownMediumScreen ? "140px" : "180px", width: "100%" }} />
      <Button
        color="primary"
        variant="contained"
        sx={{
          position: "relative",
          top: !isDownsmallScreen ? "-8%" : "-11%",
          left: "50%",
          transform: "translateX(-50%)",
          width: !isDownsmallScreen ? "155px" : "77px",
          height: !isDownsmallScreen ? "48px" : "33px",
        }}
      >
        {titleBtn}
      </Button>
    </Grid>
  );
};

export default FoodMenuItem;
