import React, { useState } from "react";

import { CardContent, Grid, TextField, Typography } from "@mui/material";

const Form1 = ({
  details: {
    university,
    city,
    Domain,
    Graduation,
    p1,
    PD1,
    p2,
    PD2,
    p3,
    PD3,
    skills,
  },
  handleDetails,
}) => {
  const [step, setStep] = useState(1);

  return (
    <>
      <CardContent>
        {step === 1 && (
          <form>
            <Typography
              variant="h5"
              component="h4"
              color="textSecondary"
              align="center"
            >
              EDUCATIONAL DETAILS
            </Typography>
            <br />
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="University/College Name"
                  placeholder="Enter Your University/College Name"
                  name="university"
                  value={university}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="City, State, Country"
                  placeholder="Enter Your City, State, Country"
                  name="city"
                  value={city}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Domain"
                  placeholder="Enter Your Domain"
                  name="Domain"
                  value={Domain}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Graduation Year"
                  placeholder="Enter Your Graduation Year"
                  name="Graduation"
                  value={Graduation}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project1"
                  placeholder="Enter Your Project1"
                  name="p1"
                  value={p1}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project Description"
                  multiline
                  rows={2}
                  placeholder="Enter Your Project Definition"
                  name="PD1"
                  value={PD1}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project2"
                  placeholder="Enter Your Project2"
                  name="p2"
                  value={p2}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project Description"
                  multiline
                  rows={2}
                  placeholder="Enter Your Project Definition"
                  name="PD2"
                  value={PD2}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project3"
                  placeholder="Enter Your Project3"
                  name="p3"
                  value={p3}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project Description"
                  multiline
                  rows={2}
                  placeholder="Enter Your Project Definition"
                  name="PD3"
                  value={PD3}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Skills"
                  multiline
                  rows={2}
                  placeholder="Enter Your Skills"
                  name="skills"
                  value={skills}
                  onChange={handleDetails}
                  fullWidth
                  required
                ></TextField>
              </Grid>
            </Grid>
          </form>
        )}
      </CardContent>
    </>
  );
};

export default Form1;
