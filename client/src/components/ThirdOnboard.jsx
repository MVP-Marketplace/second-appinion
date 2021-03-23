import React from "react";
import { Grid, Button } from "@material-ui/core";
import onboard3 from "../Images/onboard3.png";

const FirstOnboard = () => {
  return (
    <>
      <Grid className="onboard3">
        <img className="img3" src={onboard3} alt="" />
        <h1>
          Now, let’s upload or take a photo
          <br />
          of your Xrays and submit them
          <br />
          through the app.
        </h1>
        <Button variant="contained" size="large" id="bookbutton">
          Upload you X-Ray
        </Button>
        <h3>
          dont have an X-ray? No problem, you can
          <br />
          <a>send us a picture of your mouth</a>
        </h3>
      </Grid>
    </>
  );
};

export default FirstOnboard;
