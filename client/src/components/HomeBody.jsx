import React from "react";
import Home from "../Images/image (11).png";
import { Link } from "react-router-dom";
import time from "../Images/time.png";
import customer from "../Images/customer.png";
import pill from "../Images/pill.png";
import { Grid, Button } from "@material-ui/core";
import "../styles/Home.css";

const HomeBody = () => {
  return (
    <>
      <Grid className="container">
        <Grid className="headerHome">
          <h1 className="headerTitle">Use Second Appinion</h1>
          <p>Send your x-rays to an unbiased dentist for a second opinion.</p>
        </Grid>
        <img className="homeImg" src={Home} alt="Customer in a Dentist Chair" />
        <Grid>
          <Link className="button-link" to="/form">
            <Button variant="contained" size="large" id="bookbutton">
              Start Here
            </Button>
          </Link>
        </Grid>
        <Grid className="btnBody">
          <Grid>
            <h2>How It Works?</h2>
          </Grid>
          <Grid className="square-icons">
            <Grid className="picAndText">
              <img src={time} alt="" />
              <p>Upload your Dental X-rays</p>
            </Grid>
            <Grid className="picAndText">
              <img src={customer} alt="" />
              <p>Explain your oral issue</p>
            </Grid>
            <Grid className="picAndText">
              <img src={pill} alt="" />
              <p>Receive your second opinion</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeBody;
