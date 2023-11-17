"use client";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
export interface IFoodMenuItemProps {
  menuImage: string;
  titleBtn: string;
}
const FoodMenuItem: React.FC<IFoodMenuItemProps> = ({ menuImage, titleBtn }) => {
  const theme = useTheme();
  const isUpMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid item xs={isDownLargeScreen ? 6 : 3} position={"relative"}>
      <Image
        alt={titleBtn}
        src={menuImage}
        width={isUpMediumScreen ? 240 : 102}
        height={isUpMediumScreen ? 240 : 102}
        style={{ position: "relative", top: "30%", left: "-50%", transform: "translateX(50%)", marginTop: isUpMediumScreen ? "-102px" : "-60px" }}
      />

      <Box sx={{ border: "1px solid rgb(65,127,86)", borderRadius: 1, px: 1, height: isUpMediumScreen ? "180px" : "81px", width: "100%" }}></Box>
      <Button
        color="primary"
        variant="contained"
        sx={{
          position: "relative",
          top: isUpMediumScreen ? "-8%" : "-11%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isUpMediumScreen ? "155px" : "77px",
          height: isUpMediumScreen ? "48px" : "33px",
        }}
      >
        {titleBtn}
      </Button>
    </Grid>
  );
};

export default FoodMenuItem;
