import Icon from "@/app/Components/CustomIcon/Icon";
import { IconButton, styled } from "@mui/material";

export const ArrowIcon = styled(IconButton)({
  position: "absolute",
  zIndex: 1,
  top: "50%",
  transform: "translate(0, -50%)",
  cursor: "pointer",
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: " 4px",
  padding: " 8px",
  [theme.breakpoints.up("md")]: {},
}));
