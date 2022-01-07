import React from "react";
import { Card, Typography, CardContent } from "@mui/material";

const Header = () => {
  return (
    <>
      <Card style={{ maxWidth: 700, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            style={{
              fontFamily: "system-ui",
              backgroundColor: "#43D4DC",
              padding: "12px",
            }}
          >
            RESUME BUILDER
          </Typography>
          <br />

          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            align="center"
          >
            Fill up the form and make your resume
          </Typography>
          <br />
          <br />
          <Typography>{/* <ReactStepper /> */}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Header;
