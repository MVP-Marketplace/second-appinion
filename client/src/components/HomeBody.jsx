import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "../Images/image (11).png";
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
        <Button
          variant="contained"
          size="large"
          color="primary"
          id="bookbutton"
        >
          BOOK NOW
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeBody;
