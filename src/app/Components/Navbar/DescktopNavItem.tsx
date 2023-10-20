import typography from "@/app/Theme/typography";
import { Box, List, ListItem, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Icon from "../CustomIcon/Icon";
export interface INavListItems {
  item: string;
  route: string;
  children?: INavListChildren[];
}
interface INavListChildren {
  item: string;
  ChildrenRouth: string;
}
const navListItems: INavListItems[] = [
  { item: "تماس با ما", route: "" },
  { item: "درباره ما", route: "" },
  { item: "اعطای نمایندگی", route: "" },
  {
    item: "منو",
    route: "",
    children: [
      { item: "غذای اصلی", ChildrenRouth: "" },
      { item: "پیش غذا", ChildrenRouth: "" },
      { item: "دسر", ChildrenRouth: "" },
      { item: "نوشیدنی", ChildrenRouth: "" },
    ],
  },
  {
    item: "شعبه",
    route: "",
    children: [
      { item: "چالوس", ChildrenRouth: "" },
      { item: "اکباتان", ChildrenRouth: "" },
      { item: "اقدسیه", ChildrenRouth: "" },
      { item: "ونک ", ChildrenRouth: "" },
    ],
  },
  { item: "صفحه اصلی", route: "" },
];
const DescktopNavItem = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery("(max-width:1015px)");

  return (
    <Box sx={{ direction: "rtl" }}>
      <List
        sx={{
          display: "flex",
          "@media (max-width:1015px)": {
            fontSize: "14px",
          },
        }}
      >
        {navListItems.map((listItem, index) => (
          <ListItem key={listItem.item} sx={{ color: "green", width: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {listItem.children ? (
              <Icon
                pathName="../Icons/Bold/Arrow/arrow-down.svg"
                focused={false}
                size={isDownMedium ? "9px" : "16px"}
                color={theme.palette.primary.main}
                style={{
                  marginTop: isDownMedium ? "4px" : "8px",
                  marginLeft: isDownMedium ? "4px" : "8px",
                }}
              />
            ) : (
              ""
            )}
            {listItem.item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DescktopNavItem;
