"use client";
import { Box, Grid, useTheme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FoodMenuItem from "./MenuItem";
import SearchBox from "../../CustomTextfild/SearchBox";

const menuItems = [
  { image: "/Images/Foodmenu/mainFood.png", titleBtn: "غذای اصلی" },
  { image: "/Images/Foodmenu/Appetizer.png", titleBtn: "پیش غذا" },
  { image: "/Images/Foodmenu/Dessert.png", titleBtn: "دسر" },
  { image: "/Images/Foodmenu/Drink.png", titleBtn: "نوشیدنی " },
];
const FoodMenu = () => {
  const theme = useTheme();
  const isUpMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box sx={{ mx: 0, my: 2, display: isUpMediumScreen ? "none" : "block" }}>
        <SearchBox />
      </Box>
      <Box sx={{ my: isUpMediumScreen ? 6 : 3 }}>
        <Typography variant={isUpMediumScreen ? "h4" : "h6"} sx={{ textAlign: "center", mb: isUpMediumScreen ? 4 : 2 }}>
          منوی رستوران
        </Typography>
        <Grid container spacing={isUpMediumScreen ? 3 : 2} sx={{ justifyContent: "space-around", px: isUpMediumScreen ? "109px" : "20px" }}>
          {menuItems.map((menuItem) => (
            <FoodMenuItem menuImage={menuItem.image} titleBtn={menuItem.titleBtn} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FoodMenu;
