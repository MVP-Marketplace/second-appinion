import React from "react";
import { Grid } from "@material-ui/core";
import onboard1 from "../../Images/onboard2.png";
import "../../styles/onboard.css";

const FirstOnboard = () => {
  return (
    <>
      <Grid className="onboard">
        <h1 className="onboardWelcome">Welcome!</h1>
        <h1 className="onboardSubTitle">
          Use Second Appinion to send <br />
          your X-Rays to unbiased <br />
          dentists for a Second Appinion.
        </h1>
        <img
          className="img1"
          src={onboard1}
          alt="Customer in a Dentist Chair"
        />
      </Grid>
    </>
  );
};

export default FirstOnboard;
