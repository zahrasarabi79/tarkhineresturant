"use client";
import { AppBar, Box, Button, Grid, IconButton, Stack, Toolbar, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Icon from "./Icon/Icon";

const NavBar = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const StyledIconButton = styled(IconButton)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 4px;
    padding: 8px;
  `;

  return (
    <>
      <AppBar position="static" dir="rtl">
        <Toolbar>
          <Stack sx={{ direction: "row" }}>
            <Icon pathName="../Icons/Outline/Essetional/menu.svg" focused={false} color={theme.palette.primary.main} />
          </Stack>
            <Image src="../Images/Logo/Logo.svg" width={102} height={32} alt="shopingcard" />
          <Stack sx={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 }}>
            <StyledIconButton>
              <Icon pathName="../Icons/Outline/Users/user.svg" focused={false} size="16px" color={theme.palette.primary.main} />
            </StyledIconButton>
            <StyledIconButton>
              <Icon pathName="../Icons/Outline/Shop/shopping-cart.svg" focused={false} size="16px" color={theme.palette.primary.main} />
            </StyledIconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
