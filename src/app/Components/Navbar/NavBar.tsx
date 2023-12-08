"use client";
import { AppBar, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Icon from "../shared/CustomIcon/Icon";
import DescktopNavItem from "./DescktopNavItem";
import { StyledIconButton } from "@/app/style/StyleComponents/StyleComponents";

const NavBar = () => {
  const theme = useTheme();
  const isUpMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isDownLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <AppBar position="static" dir="rtl">
        <Toolbar>
          {isDownLargeScreen && (
            <Stack sx={{ direction: "row" }}>
              <Icon pathName="../Icons/Outline/Essetional/menu.svg" focused={false} color={theme.palette.primary.main} />
            </Stack>
          )}
          <Image src="../Images/Logo/HomsaFullLogo.svg" width={isUpMediumScreen ? 142 : 102} height={isUpMediumScreen ? 40 : 32} alt="shopingcard" />
          {!isDownLargeScreen && <DescktopNavItem />}
          <Stack sx={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 }}>
            {!isDownLargeScreen && (
              <StyledIconButton>
                <Icon pathName="../Icons/Outline/Search/search-normal.svg" focused={false} size={isUpMediumScreen ? "24px" : "16px"} color={theme.palette.primary.main} />
              </StyledIconButton>
            )}
            <StyledIconButton>
              <Icon pathName="../Icons/Outline/Users/user.svg" focused={false} size={isUpMediumScreen ? "24px" : "16px"} color={theme.palette.primary.main} />
            </StyledIconButton>
            <StyledIconButton>
              <Icon pathName="../Icons/Outline/Shop/shopping-cart.svg" focused={false} size={isUpMediumScreen ? "24px" : "16px"} color={theme.palette.primary.main} />
            </StyledIconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
