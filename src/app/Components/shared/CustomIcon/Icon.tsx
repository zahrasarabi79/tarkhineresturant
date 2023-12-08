"use client";
import React, { FC } from "react";
import { Box, useTheme } from "@mui/material";
import { IconComponentProps } from "@/Interface/Interface";

const Icon: FC<IconComponentProps> = ({ pathName, color = "white", size = "24px", focused, style, className }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        className={className} //add class name for create style compnente is necessary
        component="div"
        sx={{
          maskImage: `url(/icon/${pathName})`,
          WebkitMaskImage: `url(/icon/${pathName})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: size,
          backgroundColor: focused ? theme.palette.primary.main : color,
          width: size,
          height: size,

          ...style,
        }}
      />
    </>
  );
};

export default Icon;
