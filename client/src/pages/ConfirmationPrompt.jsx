import React from "react";
import ConfirmationImg from "../Images/ManDesk.svg";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "../styles/Onboard.css";

const ConfirmationPrompt = () => {
  const history = useHistory();

  const handleRedirect = async (e) => {
    e.preventDefault();
    try {
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid className="onboard-container">
        <div className="onboard-img-wrapper">
          <img
            className="onboard-img"
            src={ConfirmationImg}
            alt="Person using a computer"
          />
        </div>
        <div className="onboard-text">
          <p>
            Congrats you're ready for a second opinion! A dentist wil review
            your x-rays in 24 hours. Now you can make an educated decision about
            your dental health.
          </p>
        </div>

        <button className="completeButton" onClick={handleRedirect}>
          Done
        </button>
      </Grid>
    </>
  );
};

export default ConfirmationPrompt;
