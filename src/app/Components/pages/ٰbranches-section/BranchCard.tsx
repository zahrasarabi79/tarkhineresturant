"use client";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { IBranches } from "./BranchesSection";
export interface IBranchCard {
  branch: IBranches;
}
const BranchCard: FC<IBranchCard> = ({ branch }) => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Stack
      direction={isDownLargeScreen ? "row" : "column"}
      sx={{
        position: "relative",
        width: isDownLargeScreen ? "fix" : "288px",
        height: isDownLargeScreen ? "100%" : "auto",
        border: "1px solid #CBCBCB",
        borderRadius: 1,
        overflow: "hidden",
        gap: 1,
      }}
    >
      <Stack sx={{ position: "relative", width: isDownLargeScreen ? "144px" : "288px", height: isDownLargeScreen ? "fix" : "230px" }}>
        <Image alt="image1" src={isDownLargeScreen ? branch.mobileImage : branch.desktopImage} fill style={{ position: "absolute" }} />
      </Stack>
      <Stack>
        <Typography variant="h7" color="initial">
          {branch.branchName}
        </Typography>
        <Typography variant="captionLG" color="initial" sx={{ textAlign: "center", mb: 2, p: 1 }}>
          {branch.address}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BranchCard;
