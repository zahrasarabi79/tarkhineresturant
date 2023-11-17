import React from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import Icon from "../CustomIcon/Icon";

const SearchBox = () => {
  return (
    <TextField
      sx={{ "& .MuiInputBase-input.MuiOutlinedInput-input ": { padding: "8px 16px" } }}
      fullWidth
      placeholder="جستجو"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Icon pathName="../Icons/Outline/Search/search-normal-1.svg" color="black" focused={false} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
