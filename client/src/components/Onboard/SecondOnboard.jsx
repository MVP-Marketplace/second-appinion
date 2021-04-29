import React from "react";
import Teeth from "../../Images/Teeth.svg";
import { Grid } from "@material-ui/core";
import "../../styles/Onboard.css";

const SecondOnboard = () => {
  return (
    <>
      <Grid className="onboard-container">
        <div className="onboard-text">
          <p>
            First, let’s get your X-rays. Call your dentist and ask them to send
            you your X-Rays.
          </p>
        </div>
        <div className="onboard-img">
          <img className="img2" src={Teeth} alt="Man flossing teeth" />
        </div>
      </Grid>
    </>
  );
};

export default SecondOnboard;
