import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/system";
import { red, green, blue } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MediaCard = ({
  rocketId,
  missionName,
  date,
  success,
  upcoming,
  image,
  launchId,
}) => {
  const rocket = useSelector((state) => state.launch.rocketData);

  let rocketName = "";

  rocket.length > 0 &&
    rocket.map((data) => {
      if (data.id === rocketId) {
        rocketName = data.name;
      }
    });

  return (
    <>
        <Link to={`/displayDetails/${launchId}`} style={{textDecoration: 'none'}}>
      <ThemeProvider theme={theme}>
        <Cards>
          <CardActionArea>
            <CardImage component="img" image={image} alt="green iguana" />
            <CardContent sx={{ padding: "8px 4px", mt: 2 }}>
              <Typography sx={{fontWeight: '400'}} variant="h4" component="div" color="#21325E">
                {missionName}
              </Typography>
              <Typography variant="h5" color="#3E497A">
                {rocketName}
              </Typography>
            </CardContent>
            <CardContentBottom sx={{  }}>
              <Typography
                variant="subtitle1"
                component="div"
                color="#313552"
                sx={{ fontWeight: "500" }}
              >
                {date}
              </Typography>
              <Typography
                variant="h6"
                color={success ? "success.main" : "error.main"}
              >
                {success ? "Success" : "Failed"}
              </Typography>
            </CardContentBottom>
          </CardActionArea>
        </Cards>
      </ThemeProvider>
      </Link>
    </>
  );
};

const Cards = styled(Card)(({ theme }) => ({
  padding: "10px",
  [theme.breakpoints.down("desktop")]: {
    height: "320px",
  },
  [theme.breakpoints.down("largeLaptop")]: {
    height: "300px",
  },
  [theme.breakpoints.down("mediumMobile")]: {
    height: "250px",
  },
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  [theme.breakpoints.down("desktop")]: {
    height: "150px",
  },
  [theme.breakpoints.down("mediumMobile")]: {
    height: "100px",
  },
  [theme.breakpoints.up("md")]: {
    height: "150px",
  },
  background: "#F0F0F0",
  borderRadius: "10px",
  objectFit: "contain",
}));

const CardContentBottom = styled(CardContent)(({ theme, success }) => ({
  marginTop: '10px',
  padding: '4px',
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center',
  [theme.breakpoints.down("largeMobile")]: {
    flexDirection: "column",
    alignItems: 'flex-start',
  },
}));

export default MediaCard;