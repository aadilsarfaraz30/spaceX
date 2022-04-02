import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { getFilterState, getSortState } from "../../redux/action/getLaunchDataAction";

const Filter = () => {
  const dispatch = useDispatch(getFilterState);
  const dispatchSort = useDispatch(getSortState);
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
    dispatch(getFilterState(event.target.value));
    dispatchSort(getSortState(''))
  };
  return (
    <Box sx={{ width: "120px",background: 'white' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filters</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filters"
          onChange={handleChange}
        >
          <MenuItem value="rockets">Rockets</MenuItem>
          <MenuItem value="launches">Launches</MenuItem>
          <MenuItem value="">None</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
