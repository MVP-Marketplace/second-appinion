import React from "react";
import Secretary from "../../Images/Secretary.svg";
import { Grid } from "@material-ui/core";
import "../../styles/Onboard.css";

const StartQuestionaire = () => {
  return (
    <>
      <Grid className="onboard-container">
        <div>
          <img
            src={Secretary}
            alt="Women on Computer"
            className="start-image"
          ></img>
        </div>
        <div className="onboard-text">
          <p>
            We want to ensure you receive a timely second opinion. Please answer
            some questions to better assist you.
          </p>
        </div>
      </Grid>
    </>
  );
};

export default StartQuestionaire;
