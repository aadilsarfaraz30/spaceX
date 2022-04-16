/* eslint-disable array-callback-return */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, useMediaQuery, Typography } from "@mui/material";
import LaunchDetails from "../components/details/LaunchDetails";
import RocketDetails from "../components/details/RocketDetails";
import RocketTables from "../components/details/RocketTables";
import Images from "../components/details/Images";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

const DisplayDetails = () => {
  const details = [];
  const data = useSelector((state) => state.launch);

 const { id } = useParams();
  data.launchData.map((launch) => {
    if (launch.id === id) {
      data.rocketData.map((rocket) => {
        if (rocket.id === launch.rocket) {
          details.push({
            missionName: launch.name,
            success: launch.success,
            failure: launch.failures,
            rocketId: launch.rocket,
            launchDetails: launch.details,
            launchImages: launch.links.flickr.original,
            rocket: rocket.name,
            heightM: rocket.height.meters,
            heightF: rocket.height.feet,
            diameterM: rocket.diameter.meters,
            diameterF: rocket.diameter.feet,
            massKG: rocket.mass.kg,
            massLB: rocket.mass.lb,
            successRate: rocket.success_rate_pct,
            cost: rocket.cost_per_launch,
            description: rocket.description,
            rocketImages: rocket.flickr_images,
          });
        }
      });
    }
  });

  const mobileLarge = useMediaQuery("(max-width: 425px)");

  return (
    <>
      {details.map((data) => {
        return (
          <>
            <ThemeProvider theme={theme}>
              <LaunchTitle>
                <Typography variant="h3" component="h2">
                  {data.missionName.slice(0, 11)}
                </Typography>
              </LaunchTitle>

              <LaunchDetailsWrapper>
                <LaunchDetails
                  launchDetails={data.launchDetails}
                  success={data.success}
                  failure={data.failure}
                  largeMobile={mobileLarge}
                />

                <Images images={data.launchImages} mobileLarge={mobileLarge} />
              </LaunchDetailsWrapper>
              <RocketDetailsWrapper>
                <Typography textAlign="center" variant="h3" component="h2">
                  {data.rocket}
                </Typography>
                <RocketDetails rocketDescription={data.description} />
                <Images images={data.rocketImages} mobileLarge={mobileLarge} />
                <RocketTables
                  heightF={data.heightF}
                  heightM={data.heightM}
                  diameterM={data.diameterM}
                  diameterF={data.diameterF}
                  cost={data.cost}
                  massLB={data.massLB}
                  massKG={data.massKG}
                  successRate={data.successRate}
                />
              </RocketDetailsWrapper>
            </ThemeProvider>
          </>
        );
      })}
    </>
  );
};

export default DisplayDetails;

const LaunchTitle = styled("div")({
  display: "flex",
  [`@media screen and (max-width: 430px)`]: {
    flexDirection: "column",
  },
  justifyContent: "space-around",
  alignItems: "center",
  height: "auto",
  minHeight: "150px",
});

const LaunchDetailsWrapper = styled(Box)({
  margin: "0 30px",
  [`@media screen and (max-width: 768px)`]: {},
});

const RocketDetailsWrapper = styled(Box)({
  margin: "0 30px",
});
