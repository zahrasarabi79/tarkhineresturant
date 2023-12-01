"use client";
import { Box, Grid, useTheme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import BranchCard from "./BranchCard";

const branches = [
  { image: "/Images/Foodmenu/mainFood.png", address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶", branchName: "شعبه ونک" },
  { image: "/Images/Foodmenu/mainFood.png", address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸", branchName: "شعبه اقدسیه" },
  { image: "/Images/Foodmenu/mainFood.png", address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی", branchName: "شعبه چالوس" },
  { image: "/Images/Foodmenu/mainFood.png", address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم", branchName: "شعبه اکباتان" },
];
const FoodMenu = () => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          ترخینه گردی
        </Typography>
        <Grid container sx={{ justifyContent: "space-around" }}>
          {branches.map((branch) => (
            <BranchCard />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FoodMenu;
