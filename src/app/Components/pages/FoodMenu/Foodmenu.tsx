"use client";
import { Box, Grid, useTheme, Typography, useMediaQuery, Container } from "@mui/material";
import React from "react";
import FoodMenuItem from "./MenuItem";
import SearchBox from "../../shared/CustomTextfild/SearchBox";
import { menuItems } from "../../../../../public/static-data/menuItems";
import { IMenuItem } from "@/Interface/Interface";

const FoodMenu = () => {
  const theme = useTheme();
  const isUpMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isDownsmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Box sx={{ m: 2, display: isDownLargeScreen ? "block" : "none" }}>
        <SearchBox />
      </Box>
      <Box sx={{ my: isUpMediumScreen ? 6 : 3 }}>
        <Typography variant={isDownsmallScreen ? "h6" : "h4"} sx={{ textAlign: "center", mb: isDownsmallScreen ? 4 : 0 }}>
          منوی رستوران
        </Typography>
        <Container maxWidth={"lg"}>
          <Grid container spacing={isDownsmallScreen ? 4 : isDownMediumScreen ? 2 : 2} sx={{ justifyContent: "space-around" }}>
            {menuItems.map((menuItem: IMenuItem, index: number) => (
              <FoodMenuItem key={index} menuImage={menuItem.image} titleBtn={menuItem.titleBtn} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FoodMenu;
