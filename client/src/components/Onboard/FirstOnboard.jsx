import React from "react";
import { Grid } from "@material-ui/core";
import onboard1 from "../../Images/onboard2.png";

const FirstOnboard = () => {
  return (
    <>
      <Grid className="onboard1">
        <h1 className="onboardWelcome">Welcome</h1>
        <h1>
          Use Second Appinion to send <br />
          your X-Rays to unbiased <br />
          dentists for a second oppinion.
        </h1>
        <img className="img1" src={onboard1} alt="" />
      </Grid>
    </>
  );
};

export default FirstOnboard;
