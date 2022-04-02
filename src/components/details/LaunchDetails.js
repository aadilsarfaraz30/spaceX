import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LaunchDetails = ({ launchDetails, success, largeMobile, failure }) => {
  return (
    <Wrapper>
      <Description >
        <Typography
          sx={{
            fontWeight: "500",
            textAlign: largeMobile ? "center" : "left",
            marginBottom: "10px",
          }}
          variant="h4"
          component="div"
        >
          Launch Details
        </Typography>
        <Typography
          sx={{ fontSize: largeMobile ? "14px" : "18px" ,
          textAlign: largeMobile ? "center" : "left",}}
          
          mt={1}
          variant="body1"
          component="div"
        >
          {launchDetails ? launchDetails : "No details found..."}
        </Typography>
      </Description>
      <StatusContainer elevation={5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: largeMobile ? "center" : "flex-start",
          }}
        >
          <Typography
            mt={2}
            variant="h5"
            component="div"
            sx={{
              fontWeight: "500",
            }}
          >
            Status:
          </Typography>
          <Typography
            mt={2}
            variant="subtitle1"
            component="div"
            ml={1}
            color={success ? "success.main" : "error.main"}
            sx={{ fontWeight: "500" }}
          >
            {success ? "Successfull" : " Failed"}
          </Typography>
        </Box>

        {!success ? (
          failure.map((fail) => {
            return (
              <>
                <Box
                  sx={{
                    textAlign: "left",
                    textTransform: "capitalize",
                    marginBottom: "30px",
                  }}
                >
                  <Typography mt={1}
                  sx={{ fontSize: largeMobile ? "14px" : "18px",
                  textAlign: largeMobile ? "center" : "left", }}
                  variant="body1" component="div">
                    {fail.reason}
                  </Typography>
                </Box>
              </>
            );
          })
        ) : (
          <>
            <Box
              sx={{
                textAlign: largeMobile ? "center" : "left", 
                textTransform: "capitalize",
                marginBottom: "30px",
              }}
            >
              <Typography mt={1} variant="body1" component="div">
                Mission was Successfull
              </Typography>
            </Box>
          </>
        )}
      </StatusContainer>
    </Wrapper>
  );
};
export default LaunchDetails;

const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  gap: "15px",
  [`@media screen and (max-width: 768px)`]: {
    flexDirection: "column",
  },
});

const Description = styled(Box)(({ theme }) => ({
  margin: "2px 0",
  padding: "15px",
  [`@media screen and (min-width: 800px)`]: {
    width: "50%",
    // width: '100%'
  },
}));

const StatusContainer = styled(Box)({
  padding: "15px",
  [`@media screen and (max-width: 768px)`]: {},
});
