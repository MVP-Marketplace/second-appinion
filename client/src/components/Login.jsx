import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import HamBurger from "./HamBurger";
import Footer from "./Footer";
import axios from "axios";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',

//       },
//     },
//   }));
const Login = () => {
  const [formData, setFormData] = useState(null);
  // const classes = useStyles();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/users/");
    // history.push('/dashboard')
  };
  return (
    <>
      <HamBurger />

      <Grid className="login">
        <h1>
          Get a Second <br />
          opinion
        </h1>
        <form onSubmit={handleSubmit}>
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
