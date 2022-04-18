import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { getSortState } from "../../redux/action/getLaunchDataAction";
import { useState } from "react";

const SortByForLaunch = () => {
  const dispatch = useDispatch(getSortState);
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
    dispatch(getSortState(event.target.value));
  };
  return (
    <Box sx={{ width: "120px" ,background:' white'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="fail">Fail</MenuItem>
          {/* <MenuItem value="">None</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByForLaunch;
