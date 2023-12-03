"use client";
import { Box, Grid, useTheme, Typography, useMediaQuery, Stack } from "@mui/material";
import React from "react";
import BranchCard from "./BranchCard";
export interface IBranches {
  desktopImage: string;
  address: string;
  branchName: string;
  mobileImage: string;
}

const branches: IBranches[] = [
  {
    desktopImage: "/Images/branches/desktop-branches/vanak-branch.jpg",
    mobileImage: "/Images/branches/mobile-branches/ekbatan-branch-mobile.gif",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    branchName: "شعبه ونک",
  },
  {
    desktopImage: "/Images/branches/desktop-branches/aghdasieh-branch.jpg",
    mobileImage: "/Images/branches/mobile-branches/ekbatan-branch-mobile.gif",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    branchName: "شعبه اقدسیه",
  },
  {
    desktopImage: "/Images/branches/desktop-branches/chalos-branch.jpg",
    mobileImage: "/Images/branches/mobile-branches/ekbatan-branch-mobile.gif",
    address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    branchName: "شعبه چالوس",
  },
  {
    desktopImage: "/Images/branches/desktop-branches/ekbatan-branch.png",
    mobileImage: "/Images/branches/mobile-branches/ekbatan-branch-mobile.gif",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    branchName: "شعبه اکباتان",
  },
];
const BranchesSection = () => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Typography variant={isDownLargeScreen ? "h5" : "h4"} sx={{ textAlign: "center", mb: 3 }}>
          ترخینه گردی
        </Typography>
        <Stack direction={isDownLargeScreen ? "column" : "row"} sx={{ justifyContent: "center", gap: 3 }}>
          {branches.map((branch: IBranches) => (
            <BranchCard branch={branch} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default BranchesSection;
