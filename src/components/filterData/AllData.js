import React from 'react'
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import MediaCard from '../MediaCard';

const AllData = () => {
    const launchData = useSelector((state) => state.launch.launchData);

    


  return (
    <> {launchData.length > 0 &&
        launchData.map((data) => (
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
        ))}</>
  )
}

export default AllData