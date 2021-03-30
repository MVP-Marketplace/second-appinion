import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import welcome from "../Images/welcome.png";

const Welcome = () => {
  return (
    <>
      <Grid className="welcome">
        <img className="welcomeImg" src={welcome} alt="welcome image" />
        <Grid className="welcomeBttn">
          <Link to="/signup">
            <Button
              className="signup"
              variant="contained"
              size="large"
              id="bookbutton"
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button
              className="signin"
              variant="contained"
              size="large"
              id="bookbutton"
            >
              Sign In
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
