"use client";
import { Box, useMediaQuery, useTheme, Typography, Button, styled, IconButton, Fade, Grow, keyframes } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useReducer } from "react";
import { IChangeImageAction, ISliderComponentProps } from "@/Interface/Interface";
import { ArrowIcon } from "@/app/style/StyleComponents/StyleComponents";
import Icon from "../CustomIcon/Icon";
const imageSlider = [
  { url: "/Images/Slider/jonathan-pielmayer-RKJElwIyCQw-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/annie-spratt-R3LcfTvcGWY-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/eric-mcnew-WWtubRjKXK8-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/joseph-gonzalez-rp3c2RMcwgw-unsplash.jpg", title: "food1" },
  { url: "/Images/Slider/kimzy-nanney-LNDgBERq8Q0-unsplash.jpg", title: "food1" },
];
const SliderTitle = ["تجربه غذای سالم و گیاهی به سبک هومسا", "لذت غذای سالم و گیاهی را با هومسا تجربه کنید!", "لذت غذای سالم را با هومسا تجربه کنید!", "xgjjkkj", "khkhkhj"];

const Slider: React.FC<ISliderComponentProps> = ({ sliderTitle, sliderBtnTitle }) => {
  const FadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  const theme = useTheme();
  const isUpMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const initialValue = 0;
  const changeSlider = (state: number, { type, payload = 0 }: IChangeImageAction) => {
    switch (type) {
      case "PREVIOUS_IMAGE":
        const isFirstSliderImage: boolean = state === 0;
        return isFirstSliderImage ? imageSlider.length - 1 : state - 1;
      case "NEXT_IMAGE":
        const isLastSliderImage = state === imageSlider.length - 1;
        return isLastSliderImage ? 0 : state + 1;
      case "SET_CURRENT_INDEX":
        return payload;
      default:
        return state;
    }
  };
  const [currentIndex, dispatch] = useReducer(changeSlider, initialValue);
  const handlePreviousImage = () => {
    dispatch({ type: "PREVIOUS_IMAGE" });
  };
  const handleNextImage = () => {
    dispatch({ type: "NEXT_IMAGE" });
  };
  const hangleSliderImage = (slideIndex: number) => {
    dispatch({ type: "SET_CURRENT_INDEX", payload: slideIndex });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextImage();
    }, 5000);
    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Slider Images */}
      <Box sx={{ overflow: "hidden", height: isUpMediumScreen ? "336px" : "176px" }}>
        <Box
          sx={{
            display: "flex",
            height: isUpMediumScreen ? "336px" : "176px",
            transition: "transform 0.3s ease",
            // animation: `${FadeIn} 3s ease-in-out`,
            width: `${100 * imageSlider.length}%`,
            transform: `translateX(-${currentIndex * (100 / imageSlider.length)}%)`, // Slide images horizontally
          }}
        >
          {imageSlider.map((image, imageIndex) => (
            <Image
              key={imageIndex}
              src={imageSlider[imageIndex].url}
              width={0}
              sizes="100vw"
              height={0}
              style={{
                objectFit: "cover",
                width: "100%", // Calculate the width of each image
                height: isUpMediumScreen ? "336px" : "176px",
              }}
              alt="Restursnt-Slider"
              blurDataURL="URL"
              placeholder="blur"
            />
          ))}
        </Box>
      </Box>

      {/* </Grow> */}
      {/* Slider Black Cover */}
      <Box sx={{ bgcolor: "black", opacity: "50%", width: "100%", height: isUpMediumScreen ? "336px" : "176px", position: "absolute", zIndex: 1, inset: 0 }} />
      {/* Slider Rectangle */}
      <Image
        style={{ marginBottom: isUpMediumScreen ? "-16.8px" : "-11px", position: "absolute", zIndex: 2, bottom: 0, left: "50%", transform: " translate(-50%, -50%)" }}
        src={"/Images/Slider/Rectangle 2.svg"}
        width={isUpMediumScreen ? 154 : 82}
        height={isUpMediumScreen ? 33 : 19}
        alt="rectangle-Slider"
      />
      {/* Slider Bollet */}
      <Box sx={{ margin: "-4px 0px", display: "flex", position: "absolute", zIndex: 2, bottom: 0, left: "50%", transform: " translate(-50%, -50%)" }}>
        {imageSlider.map((bollet, slideIndex) => (
          <Box
            key={slideIndex}
            onClick={() => hangleSliderImage(slideIndex)}
            sx={{
              "&:target": {
                bgcolor: "red",
              },
              cursor: "pointer",
              outline: slideIndex === currentIndex ? "2px solid rgba(226, 242, 228, 1)" : "0px solid transparent",
              borderRadius: "50%",
              transition: "ease .5s",
              bgcolor: slideIndex === currentIndex ? theme.palette.primary.main : "#ADADAD",
              // transition: "ease-in-out .3s .4s",
              width: isUpMediumScreen ? 12 : 6,
              height: isUpMediumScreen ? 12 : 6,
              margin: isUpMediumScreen ? "4px 4px" : "3px 2px",
            }}
          ></Box>
        ))}
      </Box>
      {/* Nevigate Arrow */}
      {isUpMediumScreen && (
        <>
          <ArrowIcon onClick={handleNextImage} sx={{ left: 24 }}>
            <Icon pathName="../Icons/Outline/Arrow/arrow-right-3.svg" size={"32px"} />
          </ArrowIcon>
          <ArrowIcon onClick={handlePreviousImage} sx={{ right: 24 }}>
            <Icon pathName="../Icons/Outline/Arrow/arrow-left-2.svg" size={"32px"} />
          </ArrowIcon>
        </>
      )}

      {/* Slider Title */}
      <Typography
        variant={isUpMediumScreen ? "h2" : "h6"}
        color={"white"}
        sx={{ whiteSpace: "nowrap", position: "absolute", zIndex: 4, left: "50%", transform: "translate(-50%, -50%)", top: "45%" }}
      >
        {sliderTitle.map((title, titleindex) => currentIndex === titleindex && title)}
      </Typography>
      {/* Slider Button */}
      <Button size="medium" variant="contained" sx={{ position: "absolute", zIndex: 4, left: "50%", transform: "translateX(-50%)", top: isUpMediumScreen ? "69%" : "61%" }}>
        {sliderBtnTitle}
      </Button>
    </Box>
  );
};

export default Slider;
