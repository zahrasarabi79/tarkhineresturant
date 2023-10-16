"use client";
import { Box, useMediaQuery, useTheme, Typography, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
const imageSlider = [
  { url: "/Images/Slider/jonathan-pielmayer-RKJElwIyCQw-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/annie-spratt-R3LcfTvcGWY-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/eric-mcnew-WWtubRjKXK8-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/joseph-gonzalez-rp3c2RMcwgw-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/kimzy-nanney-LNDgBERq8Q0-unsplash.jpg", title: "food1" },
];
export interface ISliderComponentProps {
  sliderTitle: string;
  sliderBtnTitle: string;
}
const Slider: React.FC<ISliderComponentProps> = ({ sliderTitle, sliderBtnTitle }) => {
  const theme = useTheme();
  const isUpMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [currentIndex, setcurrentIndex] = useState();
  return (
    <Box sx={{ position: "relative" }}>
      {/* Slider Images */}
      <Image
        src={"/Images/Slider/jonathan-pielmayer-RKJElwIyCQw-unsplash.jpg"}
        width={0}
        sizes="100vw"
        height={0}
        style={{ objectFit: "cover", width: "100%", height: isUpMediumScreen ? "336px" : "176px" }}
        alt="Restursnt-Slider"
      />
      {/* Slider Black Cover */}
      <Box sx={{ bgcolor: "black", opacity: "50%", width: "100%", height: isUpMediumScreen ? "336px" : "176px", position: "absolute", zIndex: 1, inset: 0 }} />
      {/* Slider Rectangle */}
      <Image
        style={{ marginBottom: isUpMediumScreen ? "-4.8px" : "2.3px", position: "absolute", zIndex: 2, bottom: 0, left: "50%", transform: " translate(-50%, -50%)" }}
        src={"/Images/Slider/Rectangle 2.svg"}
        width={isUpMediumScreen ? 154 : 82}
        height={isUpMediumScreen ? 33 : 19}
        alt="rectangle-Slider"
      />
      {/* Slider Bollet */}
      <Box sx={{ margin: "8px 0px", display: "flex", position: "absolute", zIndex: 2, bottom: 0, left: "50%", transform: " translate(-50%, -50%)" }}>
        {imageSlider.map((bollet) => (
          <Box
            sx={{
              bgcolor: "#ADADAD",
              borderRadius: "50%",
              width: isUpMediumScreen ? 10 : 6,
              height: isUpMediumScreen ? 10 : 6,
              margin: isUpMediumScreen ? "4px 3px" : "3px 1px",
            }}
          ></Box>
        ))}
      </Box>
      {/* Nevigate Arrow */}
      {/* <Icon
        pathName="../Icons/Outline/Arrow/arrow-right-3.svg"
        color="red"
        size={"32px"}
        style={{ position: "absolute", zIndex: 1, left: 24, top: "45%", transform: "translate(-50%, -50%)" }}
      />
      <Icon
        pathName="../Icons/Outline/Arrow/arrow-left-2.svg"
        color="red"
        size={"32px"}
        style={{ position: "absolute", zIndex: 1, right: 24, top: "45%", transform: "translate(-50%, -50%)" }}
      /> */}
      {/* Slider Title */}
      <Typography
        variant={isUpMediumScreen ? "h2" : "h6"}
        color={"white"}
        sx={{ whiteSpace: "nowrap", position: "absolute", zIndex: 4, left: "50%", transform: "translate(-50%, -50%)", top: "45%" }}
      >
        {sliderTitle}
      </Typography>
      {/* Slider Button */}
      <Button size="medium" variant="contained" sx={{ position: "absolute", zIndex: 4, left: "50%", transform: "translateX(-50%)", top: isUpMediumScreen ? "69%" : "61%" }}>
        {sliderBtnTitle}
      </Button>
    </Box>
  );
};

export default Slider;
