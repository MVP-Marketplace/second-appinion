import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../Images/image (11).png";
import { Link } from "react-router-dom";
import time from "../Images/time.png";
import customer from "../Images/customer.png";
import pill from "../Images/pill.png";
import { Grid, Button } from "@material-ui/core";

const HomeBody = () => {
  return (

    <>
      <Grid className="container">
        <Grid className="headerHome">
          <h1 className="headerTitle">Get a Second Appinion</h1>
        </Grid>
        <img className="homeImg" src={Home} alt="Customer in a Dentist Chair" />
        <Grid>
          <Link className="button-link" to="/form">
            <Button variant="contained" size="large" id="bookbutton">
              Start Here
            </Button>
          </Link>
        </Grid>
        <Grid className="btmBody">
          <Grid className="picAndText">
            <img className="pic" src={time} alt="Clock" />
            <h4 className="picSubTitle">
              Timely Second <br /> Opinion From <br /> Field Experts
            </h4>
          </Grid>
          <Grid className="picAndText">
            <img className="pic" src={customer} alt="Customer on the Phone" />
            <h4 className="picSubTitle">
              Build Trusting <br />
              Relationships
            </h4>
          </Grid>
          <Grid className="picAndText">
            <img className="pic" src={pill} alt="Pill" />
            <h4 className="picSubTitle">Service Promise</h4>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeBody;
