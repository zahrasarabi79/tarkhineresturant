import Button from "@mui/material/Button";
type CustomButtonStyles = "contained" | "contained" | "text";
type CustomButtonColor = "primary" | "white" | "black";

export interface ICustomButtonComponentProp {
  style: CustomButtonStyles;
  color: CustomButtonColor;
  state;
  size;
  icon;
  text;
  iconSrc;
  btnText;
  rightIcon;
}
export const CustomButton = ({ style, color, state, size, icon, text, iconSrc, btnText, rightIcon }) => {
  return (
    <Button variant={style} color={color} size={size}>
      {btnText}
    </Button>
  );
};
