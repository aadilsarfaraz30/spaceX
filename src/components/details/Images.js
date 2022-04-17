import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";

const Images = ({ images }) => {
  return (
    <Box m={3}>
      {images.length > 0 ? (
        <Carousel dynamicHeight width="100%">
          {images.map((img) => {
            return (
              <div>
                <img src={img} alt="img" />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <Typography variant="h5" component="div" textAlign="center">
          No images found....
        </Typography>
      )}
    </Box>
  );
};

export default Images;
