"use client";
import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { IBranchCard } from "@/Interface/Interface";

const BranchCard: FC<IBranchCard> = ({ branch }) => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownsmartScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      direction={"row"}
      container
      sx={{
        height: isDownsmartScreen ? "80px" : isDownLargeScreen ? "100px" : "auto",
        border: "1px solid #CBCBCB",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Grid
        item
        xs={isDownsmartScreen ? 5 : isDownLargeScreen ? 4 : 12}
        sx={{ position: "relative", height: isDownLargeScreen ? "100%" : "230px", width: isDownLargeScreen ? "230px" : "auto", flexGrow: 1 }}
      >
        <Image fill alt={branch.branchName} src={isDownLargeScreen ? branch.mobileImage : branch.desktopImage} style={{ position: "absolute" }} />
      </Grid>
      <Grid
        item
        sx={{ p: !isDownLargeScreen ? "8px 8px 16px 8px" : "4px 8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        xs={isDownsmartScreen ? 7 : isDownLargeScreen ? 8 : 12}
      >
        <Stack>
          <Typography sx={{ textAlign: "center", mb: isDownLargeScreen ? 0 : 1 }} variant={isDownsmartScreen ? "buttonSM" : "h7"} color="initial">
            {branch.branchName}
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ textAlign: "center" }} variant={isDownsmartScreen ? "caption" : "captionLG"} color="initial">
            {branch.address}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BranchCard;
