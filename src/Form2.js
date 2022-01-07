import React, { useState } from "react";

import { CardContent, Grid, TextField, Typography } from "@mui/material";

const Form2 = ({
  detail: {
    company,
    location,
    position,
    sdate,
    edate,
    description,
    company2,
    location2,
    position2,
    sdate2,
    edate2,
    description2,
  },
  handleValue,
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
              Experience
            </Typography>
            <br />
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="Company Name"
                  placeholder="Enter Your Company Name"
                  name="company"
                  value={company}
                  onChange={handleValue}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="City, State, Country"
                  placeholder="Enter Your City, State, Country"
                  name="location"
                  value={location}
                  onChange={handleValue}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Position"
                  placeholder="Enter Your Position"
                  name="position"
                  value={position}
                  onChange={handleValue}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Start Date"
                  placeholder="Enter Your Start Date"
                  name="sdate"
                  value={sdate}
                  onChange={handleValue}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project1"
                  placeholder="Enter Your End Date"
                  name="edate"
                  value={edate}
                  onChange={handleValue}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project Description"
                  multiline
                  rows={2}
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={handleValue}
                  fullWidth
                  required
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Second Company Name"
                  placeholder="Enter Your Company Name"
                  name="company2"
                  value={company2}
                  onChange={handleValue}
                  fullWidth
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="City, State, Country"
                  placeholder="Enter Your City, State, Country"
                  name="location2"
                  value={location2}
                  onChange={handleValue}
                  fullWidth
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Position"
                  placeholder="Enter Your Position"
                  name="position2"
                  value={position2}
                  onChange={handleValue}
                  fullWidth
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Start Date"
                  placeholder="Enter Your Start Date"
                  name="sdate2"
                  value={sdate2}
                  onChange={handleValue}
                  fullWidth
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project1"
                  placeholder="Enter Your End Date"
                  name="edate2"
                  value={edate2}
                  onChange={handleValue}
                  fullWidth
                ></TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Project Description"
                  multiline
                  rows={2}
                  placeholder="Description"
                  name="description2"
                  value={description2}
                  onChange={handleValue}
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>
          </form>
        )}
      </CardContent>
    </>
  );
};

export default Form2;
