import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const SelectList = (prop) => {
  const { label, options } = prop;
  const [optionShow, setOptionShow] = useState("");

  const selectItemHandler = (event) => {
    setOptionShow(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 250 }} size="small">
      <InputLabel sx={{ color: "#e1dfdf", "&.Mui-focused": { color: "#bebcbc" } }}>
        {label}
      </InputLabel>
      <Select
        label={label}
        value={optionShow}
        sx={{
          width: "100%",
          color: "#e1dfdf",
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#e1dfdf",
            },
            "&:hover fieldset": {
              borderColor: "#bebcbc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bebcbc",
            },
          },
        }}
        onChange={selectItemHandler}
        defaultValue=""
      >
        {options.map((option) => (
          <MenuItem
            key={option._id}
            value={option.content}
            sx={{ justifyContent: "center" }}
          >
            {option.content}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectList;
