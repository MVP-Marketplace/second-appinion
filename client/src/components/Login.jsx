import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import HamBurger from "./HamBurger";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <HamBurger />

      <Grid className="login">
        <h1>
          Get a Second <br />
          opinion
        </h1>
        <form>
          <h4>Email</h4>
          <TextField className="text" variant="outlined" />
          <h4>Password</h4>
          <TextField className="text" variant="outlined" />
          <Button variant="contained" size="large" id="bookbutton">
            Sign In
          </Button>
        </form>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
