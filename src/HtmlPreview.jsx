import { Button, Typography } from "@mui/material";
import { jsPDF } from "jspdf";
import React from "react";
import "./style.css";

const HtmlPreview = ({
  user: { fname, lname, email, pno, address, Lurl, Gurl, education },
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
}) => {
  const pdfDownload = (e) => {
    e.preventDefault();
    let doc = new jsPDF("p", "px", "A3");
    doc.html(document.getElementById("pdf-view", 200, 50), {
      callback: () => {
        doc.save("test.pdf");
      },
    });
  };

  return (
    <>
      <Button variant="contained" onClick={pdfDownload}>
        Download
      </Button>

      <br />

      <div id="pdf-view">
        <Typography
          variant="h4"
          component="h2"
          fontFamily="Roboto"
          align="center"
          letterSpacing="0.3rem"
        >
          <br />
          {fname} {lname}
        </Typography>
        <br />
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="center"
        >
          {email}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="center"
        >
          {pno}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="center"
        >
          {address}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="center"
        >
          {Lurl}
        </Typography>
        {/* <Typography variant="body2" component="p" style={{ color: "#0C0C0C" }}>
        Github URL
      </Typography> */}
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="center"
        >
          {Gurl}
        </Typography>
        <br />
        <Typography letterSpacing="3px" marginLeft="25px">
          Educational Details
        </Typography>

        <hr
          style={{
            width: "580px",
            marginLeft: 25,
            textAlign: "center",
          }}
        />
        <br />
        <Typography
          variant="body2"
          component="p"
          color="primary"
          align="left"
          marginLeft="35px"
        >
          {university}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textPrimary"
          align="left"
          marginLeft="35px"
        >
          {city}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {Domain}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="center"
          display="flex"
          marginLeft="35px"
        >
          {Graduation} Passout
        </Typography>
        <br />
        <br />
        <Typography letterSpacing="3px" marginLeft="25px">
          Projects Details
        </Typography>
        <hr
          style={{
            width: "580px",
            marginLeft: 25,
            textAlign: "center",
          }}
        />
        <br />
        <Typography
          variant="body2"
          component="p"
          color="primary"
          align="left"
          marginLeft="35px"
        >
          1. {p1}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {PD1}
        </Typography>
        <br />
        <Typography
          variant="body2"
          component="p"
          color="primary"
          align="left"
          marginLeft="35px"
        >
          2. {p2}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {PD2}
        </Typography>
        <br />
        <Typography
          variant="body2"
          component="p"
          color="primary"
          align="left"
          marginLeft="35px"
        >
          3. {p3}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {PD3}
        </Typography>
        <br />
        <br />
        <Typography letterSpacing="3px" marginLeft="25px">
          Skills
        </Typography>
        <hr
          style={{
            width: "580px",
            marginLeft: 25,
            textAlign: "center",
          }}
        />
        <br />
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {skills}
        </Typography>
        <br />

        <Typography letterSpacing="3px" marginLeft="25px">
          Experience
        </Typography>
        <hr
          style={{
            width: "580px",
            marginLeft: 25,
            textAlign: "center",
          }}
        />
        <br />
        <Typography
          variant="body2"
          component="p"
          color="primary"
          align="left"
          marginLeft="35px"
        >
          1. {company}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textPrimary"
          align="left"
          marginLeft="35px"
        >
          {location}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {position}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {sdate}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {edate}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {description}
        </Typography>
        <br />
        <br />
        <br />
        <Typography
          variant="body2"
          component="p"
          color="primary"
          align="left"
          marginLeft="35px"
        >
          2. {company2}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textPrimary"
          align="left"
          marginLeft="35px"
        >
          {location2}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {position2}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {sdate2}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {edate2}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          align="left"
          marginLeft="35px"
        >
          {description2}
        </Typography>
      </div>
    </>
  );
};

export default HtmlPreview;
