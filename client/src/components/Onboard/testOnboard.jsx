import React from "react";
import { Grid } from "@material-ui/core";
import Group452 from "../../Images/Group 452.png";

const testOnboard = () => {
  return (
    <>
      <Grid className="onboard1">
        <h1 className="onboardWelcome">Welcome!</h1>
        <h1 className="onboardSubTitle">
          Use Second Appinion to send <br />
          your X-Rays to unbiased <br />
          dentists for a Second Appinion.
        </h1>
        <img
          className="img1"
          src={Group452}
          alt="Customer in a Dentist Chair"
        />
      </Grid>
    </>
  );
};

export default testOnboard;
