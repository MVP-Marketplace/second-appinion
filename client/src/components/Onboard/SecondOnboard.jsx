import React from "react";
import onboard2 from "../../Images/onboard1.png";
import { Grid } from "@material-ui/core";

const SecondOnboard = () => {
  return (
    <>
      <Grid className="onboard2">
        <h1>
          First, let’s get your X-rays. Call
          <br />
          your dentist and ask them to
          <br />
          send you your X-Rays.
        </h1>
        <img className="img2" src={onboard2} alt="" />
      </Grid>
    </>
  );
};

export default SecondOnboard;
