import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import MediaCard from "../MediaCard";

const SortByRocketData = () => {
  const launchData = useSelector((state) => state.launch.launchData);
  const sortData = useSelector((state) => state.sort.sort);
  const rocketData = launchData.filter((data) => sortData === data.rocket);

  return (
    <>
      {rocketData.length > 0 ?
        rocketData.map((data) => (
          <Grid item xs={2} sm={4} md={3} key={data.id}>
            <MediaCard
              launchId={data.id}
              rocketId={data.rocket}
              missionName={data.name.slice(0, 9)}
              date={new Date(data.date_local).toLocaleDateString()}
              success={data.success}
              upcoming={data.upcoming}
              image={data.links.patch.small}
            />
          </Grid>
        )) : <Container sx={{height: '40vh',display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
            <Box sx={{padding: '25px'}} >
              <Typography variant='h5' component='div'>
              No data found....
              </Typography>
            </Box>
          </Container>}
    </>
  );
};

export default SortByRocketData;
