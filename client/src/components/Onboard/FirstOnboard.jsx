import React from "react";
import DentalExam from "../../Images/DentalExam.svg";
import "../../styles/Onboard.css";
import { Grid } from "@material-ui/core";

const FirstOnboard = () => {
  return (
    <>
      <Grid className="onboard-container">
        <div className="onboard-text">
          <h1>Welcome!</h1>
          <p className="onboardSubTitle">
            Use Second Appinion to send your X-Rays to unbiased dentists for a
            Second Appinion.
          </p>
        </div>
        <div className="onboard-img-wrapper">
          <img src={DentalExam} alt="Customer in a Dentist Chair" />
        </div>
      </Grid>
    </>
  );
};

export default FirstOnboard;
