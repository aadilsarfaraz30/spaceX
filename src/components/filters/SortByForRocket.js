import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getSortState } from "../../redux/action/getLaunchDataAction";
import { useState } from "react";

const SortByForRocket = () => {
  const [sort, setSort] = useState("");
  const dispatch = useDispatch(getSortState);
  const rocket = useSelector((state) => state.launch.rocketData);

  const handleChange = (event) => {
    setSort(event.target.value);
    dispatch(getSortState(event.target.value));
  };

  const menuItem = rocket.length > 0 && rocket.map(data => (
    <MenuItem value={data.id} >{data.name}</MenuItem>
  )) 
  return (
    <Box sx={{ width: "120px" , background: 'white'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
        {menuItem}
          {/* <MenuItem value="falcon1">Falcon 1</MenuItem>
          <MenuItem value="falcon9">Falcon 9</MenuItem>
          <MenuItem value="falconHeavy">Falcon Heavy</MenuItem>
          <MenuItem value="starShip">Starship</MenuItem>
          <MenuItem value="">None</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByForRocket;
