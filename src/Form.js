import React, { useState } from "react";

import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

import Form1 from "./Form1";
import Form2 from "./Form2";
import HtmlPreview from "./HtmlPreview";
import Header from "./Header";

const Form = ({ props }) => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    pno: "",
    address: "",
    Lurl: "",
    Gurl: "",
  });

  const [eduDetails, setEduDetails] = useState({
    university: "",
    p1: "",
    PD1: "",
    p2: "",
    PD2: "",
    p3: "",
    PD3: "",
    skills: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    location: "",
    position: "",
    sdate: "",
    edate: "",
    description: "",
    company2: "",
    location2: "",
    position2: "",
    sdate2: "",
    edate2: "",
    description2: "",
  });

  console.log(experience);

  const [step, setStep] = useState(1);
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleDetails = (e) => {
    name = e.target.name;
    value = e.target.value;

    setEduDetails({ ...eduDetails, [name]: value });
  };

  const handleValue = (e) => {
    name = e.target.name;
    value = e.target.value;

    setExperience({ ...experience, [name]: value });
  };

  const prevStep = () => {
    let currentStepCount = step;
    if (currentStepCount > 1) {
      let prevStepCount = currentStepCount - 1;
      setStep(prevStepCount);
    }
    return null;
  };

  const nextStep = () => {
    let currentStepCount = step;
    if (currentStepCount < 4) {
      let nextStepCount = currentStepCount + 1;
      setStep(nextStepCount);
    }
    return null;
  };

  const handleSubmit = () => {
    setStep(2);
    // props.sendFormData(name, value);
  };

  return (
    <>
      <Header />
      <Card style={{ maxWidth: 700, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Button variant="contained" onClick={prevStep}>
            Back
          </Button>
          {step < 4 ? (
            <Button
              variant="contained"
              style={{ float: "right" }}
              onClick={nextStep}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ float: "right" }}
              onClick={nextStep}
            >
              Submit
            </Button>
          )}
          <br />
          <br />
          <br />
          <br />
          {step === 1 && (
            <form id="pdf-view">
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First name"
                    placeholder="Enter Your First Name"
                    name="fname"
                    value={user.fname}
                    onChange={handleInputs}
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last name"
                    placeholder="Enter Your Last Name"
                    name="lname"
                    value={user.lname}
                    onChange={handleInputs}
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    type="number"
                    label="Phone Number"
                    placeholder="Enter Your Phone Number"
                    name="pno"
                    value={user.pno}
                    onChange={handleInputs}
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="Address"
                    multiline
                    rows={4}
                    placeholder="Enter Your Address"
                    name="address"
                    value={user.address}
                    onChange={handleInputs}
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="LinkedIn"
                    placeholder="Enter Your LinkedIn URL"
                    name="Lurl"
                    value={user.Lurl}
                    onChange={handleInputs}
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="GitHub"
                    placeholder="Enter Your GitHub URL"
                    name="Gurl"
                    value={user.Gurl}
                    onChange={handleInputs}
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>
            </form>
          )}
          {step === 2 && (
            <Form1 details={eduDetails} handleDetails={handleDetails} />
          )}
          {step === 3 && (
            <Form2 detail={experience} handleValue={handleValue} />
          )}
          {step === 4 && (
            <HtmlPreview user={user} details={eduDetails} detail={experience} />
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Form;
