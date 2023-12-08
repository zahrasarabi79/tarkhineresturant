"use client";
import { Box, useTheme, Typography, useMediaQuery, Stack, Container } from "@mui/material";
import React from "react";
import BranchCard from "./BranchCard";
import { IBranche } from "@/Interface/Interface";
import { branches } from "../../../../../public/static-data/branches";

const BranchesSection = () => {
  const theme = useTheme();
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container maxWidth={isDownLargeScreen ? "md" : "lg"}>
      <Box sx={{ py: isDownLargeScreen ? 3 : 6 }}>
        <Typography variant={isDownLargeScreen ? "h5" : "h4"} sx={{ textAlign: "center", mb: 3 }}>
          هومسا گردی
        </Typography>
        <Stack direction={isDownLargeScreen ? "column" : "row"} sx={{ justifyContent: "center", gap: 3 }}>
          {branches.map((branch: IBranche) => (
            <BranchCard branch={branch} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default BranchesSection;
