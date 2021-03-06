import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LaunchDetails = ({ launchDetails, success, largeMobile, failure }) => {
  return (
    <Wrapper>
      <Description>
        <Typography
          sx={{
            fontWeight: '500',
            // textAlign: largeMobile ? "center" : "left",
            marginBottom: "10px",
            color: '#21325E'
          }}
          variant="h4"
          component="div"
        >
          Launch Details
        </Typography>
        <Typography
          sx={
            {
              // textAlign: largeMobile ? "center" : "left",
            }
          }
          variant="body2"
          component="div"
        >
          {launchDetails ? launchDetails : "No details found..."}
        </Typography>
      </Description>
      <StatusContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            // justifyContent: largeMobile ? "center" : "flex-start",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "500",
              color: '#21325E'
            }}
          >
            Status :
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
                <Box>
                  <Typography
                    mt={1}
                    sx={{
                      textTransform: 'capitalize'
                      // textAlign: largeMobile ? "center" : "left",
                    }}
                    variant="body2"
                    component="div"
                  >
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
                // textAlign: largeMobile ? "center" : "left",
                textTransform: "capitalize",
                // marginBottom: "30px",
              }}
            >
              <Typography mt={1} variant="h6" component="div">
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
  justifyContent: "space-between",
  gap: "15px",
  [`@media screen and (max-width: 768px)`]: {
    flexDirection: "column",
  },
});

const Description = styled(Box)(({ theme }) => ({
  // margin: "2px 0",
  padding: '0',
  [`@media screen and (min-width: 800px)`]: {
    padding: "15px",
    width: "50%",
  },
}));

const StatusContainer = styled(Box)({

});
