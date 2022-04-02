import { Container } from "@mui/material";
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
    <FilterWrapper>
      <Filter />
      {sortBox}
    </FilterWrapper> 
  );
};

const FilterWrapper = styled(Container)({
  marginTop: "15px",
  minHeight: "65px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "15px",
});

export default FilterContainer;
