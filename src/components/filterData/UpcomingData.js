import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import MediaCard from '../MediaCard';

const UpcomingData = () => {
    const launchData = useSelector((state) => state.launch.launchData);
    const upcomingData = launchData.filter(data => data.upcoming === true)
    console.log(upcomingData)

  return (
    <> {upcomingData.length > 0 &&
        upcomingData.map((data) => (
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

export default UpcomingData