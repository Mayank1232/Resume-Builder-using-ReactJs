import { Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const ReactStepper = () => {
  return (
    <>
      <Button variant="contained">
        <Link to="/"> Back </Link>
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" style={{ float: "right" }}>
        <Link to="/form1"> Next </Link>
      </Button>
    </>
  );
};

export default ReactStepper;
