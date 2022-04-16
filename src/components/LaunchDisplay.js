import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import AllData from "./filterData/AllData";
import SortByRocketData from "./filterData/SortByRocketData";
import SuccessData from "./filterData/SuccessData";
import UpcomingData from "./filterData/UpcomingData";
import FailLaunchesData from "./filterData/FailLaunchesData";

const LaunchDisplay = () => {
  const media = useMediaQuery("(max-width: 900px)");
  const sortData = useSelector((state) => state.sort.sort);
  const filterData = useSelector((state) => state.filter.filter);

  let display = <AllData />;
  if (filterData === "rockets" && sortData !== "") {
    display = <SortByRocketData />;
  } else if (filterData === "launches" && sortData === "success") {
    display = <SuccessData />;
  } else if (filterData === "launches" && sortData === "fail") {
    display = <FailLaunchesData />;
  } else if (filterData === "launches" && sortData === "upcoming") {
    display = <UpcomingData />;
  } else {
    display = <AllData />;
  }

  return (
    <>
      <Container>
        <GridContainer
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: media ? "12" : "8", md: 12 }}
        >
          {display}
        </GridContainer>
      </Container>
    </>
  );
};

const Container = styled(Box)({
  height: "auto",
  flexGrow: 1,
});

const GridContainer = styled(Grid)({
  padding: "20px",
});

export default LaunchDisplay;
