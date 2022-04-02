import React from "react";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const RocketDetails = ({ rocketDescription }) => {
  return (
    <>
      <Description>
        <Typography sx={{ fontWeight: "500" }} variant="h4" component="div">
          Rocket Details
        </Typography>
        <Typography mt={1} variant="body1" component="div">
          {rocketDescription}
        </Typography>
      </Description>
     
    </>
  );
};
export default RocketDetails;

const Description = styled(Box)(({ theme }) => ({
  marginTop: "12px",
  padding: "15px",
  [`@media screen and (min-width: 800px)`]: {
    width: "50%",
  },
  [`@media screen and (max-width: 425px)`]: {
    textAlign: "center",
  },
}));
