import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box,  Typography } from "@mui/material";

const Images = ({ images, mobileLarge }) => {
  return (
    <Box m={3}>
      {images.length > 0 ? (
        <Carousel>
          {images.map((img) => {
            return (
              <div
                style={{
                  width: "100%",
                  height: mobileLarge ? "400px" : "500px",
                }}
              >
                <img
                  style={{
                    height: mobileLarge ? "100%" : "auto",
                    objectFit: mobileLarge ? "cover" : "fill",
                    width: "100%",
                    textAlign: "center",
                  }}
                  src={img}
                  alt="img"
                />
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
