import { Box, List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Icon from "../shared/CustomIcon/Icon";
import { navListItems } from "../../../../public/static-data/navListItem";
import { INavListItem } from "@/Interface/Interface";

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
        {navListItems.map((listItem: INavListItem) => (
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
