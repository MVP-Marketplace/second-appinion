import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../Images/image (11).png";
import time from "../Images/time.png";
import customer from "../Images/customer.png";
import pill from "../Images/pill.png";
import { Grid, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(4),
//     }
//   }));
const HomeBody = () => {
  // const classes = useStyles();
  return (
    <Grid className="container">
      <Grid className="headerHome">
        <h1>
          Get a second
          <br /> opinion
        </h1>
        <h3>Meet your new Specialist</h3>
        <img className="homeImg" src={Home} />
      </Grid>
      <Grid>
        <Button variant="contained" size="large" id="bookbutton">
          BOOK NOW
        </Button>
      </Grid>
      <div>
        <h1>Why us?</h1>
      </div>
      <Grid className="btmBody">
        <Grid>
          <img className="pic" src={time} alt="" />
          <h4>Timely Second Opinion from field experts</h4>
        </Grid>
        <Grid>
          <img className="pic" src={customer} alt="" />
          <h4>Build Trusting relationshipsd</h4>
        </Grid>
        <Grid>
          <img className="pic" src={pill} alt="" />
          <h4>Service promise</h4>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeBody;
