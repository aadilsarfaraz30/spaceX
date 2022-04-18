import { Stack } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import SortByForLaunch from "./SortByForLaunch";
import SortByForRocket from "./SortByForRocket";

const FilterContainer = () => {
  const filter = useSelector(state=>state.filter.filter)
  
  let sortBox=''
  if(filter === 'rockets'){
    sortBox = <SortByForRocket/>
  }
  else if (filter === 'launches'){
    sortBox = <SortByForLaunch/>
  }
  else{
    sortBox=''
  }

  return (
    <FilterWrapper direction='row' gap={2}>
      <Filter />
      {sortBox}
    </FilterWrapper> 
  );
};

const FilterWrapper = styled(Stack)({
  marginTop: "20px",
  marginLeft: '20px',
});

export default FilterContainer;
