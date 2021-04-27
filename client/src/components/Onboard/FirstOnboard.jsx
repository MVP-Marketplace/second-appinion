import React from "react";
import { Grid } from "@material-ui/core";
import onboard1 from "../../Images/onboard2.png";
import "../../styles/Onboard.css";

const FirstOnboard = () => {
  return (
    <>
      <Grid className="onboard">
        <h1>Welcome!</h1>
        <p className="onboardSubTitle">
          Use Second Appinion to send your X-Rays to
          <br /> unbiased dentists for a Second Appinion.
        </p>
        <img
          className="onboard-img"
          src={onboard1}
          alt="Customer in a Dentist Chair"
        />
      </Grid>
    </>
  );
};

export default FirstOnboard;
