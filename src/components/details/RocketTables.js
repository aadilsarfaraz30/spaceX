import React from "react";
import { Box, styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import { Paper, Typography } from "@mui/material";

const RocketTables = ({
  heightM,
  heightF,
  diameterM,
  diameterF,
  cost,
  massLB,
  massKG,
  successRate,
}) => {
  return (
    <Wrapper>
      <Paper sx={{ width: "100%", maxWidth: "900px" }}>
        <List>
          <Items>
            <Typography variant="body1" component="div">
              Height
            </Typography>
            <Typography variant="subtitle1" component="div">
              {`${heightM}m/${heightF}ft`}
            </Typography>
          </Items>
          <Divider />
          <Items>
            <Typography variant="body1" component="div">
              Width
            </Typography>
            <Typography variant="subtitle1" component="div">
              {`${diameterM}m/${diameterF}ft`}
            </Typography>
          </Items>
          <Divider />
          <Items>
            <Typography variant="body1" component="div">
              Mass
            </Typography>
            <Typography variant="subtitle1" component="div">
              {`${massKG}kg/${massLB}lb`}
            </Typography>
          </Items>
          <Divider />
          <Items>
            <Typography variant="body1" component="div">
              Cost
            </Typography>
            <Typography variant="subtitle1" component="div">
              {`${cost}/launch`}
            </Typography>
          </Items>
          <Divider />
          <Items>
            <Typography variant="body1" component="div">
              Success rate
            </Typography>
            <Typography variant="subtitle1" component="div">
              {`${successRate}%`}
            </Typography>
          </Items>
        </List>
      </Paper>
    </Wrapper>
  );
};

export default RocketTables;

const Wrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
});

const List = styled(Box)({});
const Items = styled(Box)({
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
});
