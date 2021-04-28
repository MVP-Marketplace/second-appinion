import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HamBurger from "../HamBurger";
import Footer from "../Footer";
import axios from "axios";
import swal from "sweetalert";

const ForgotPassword = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`/api/users/password?email=${email}`);
      swal("Email sent.", "Check your email to reset password.");
      history.push("/");
    } catch (error) {
      swal("Oops", "Something went wrong");
    }
  };

  return (
    <>
      <HamBurger />

      <Grid className="login">
        <h1 className="headerTitle">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <h4>Email</h4>
          <TextField
            className="text"
            variant="outlined"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            variant="contained"
            size="large"
            id="bookbutton"
            type="submit"
          >
            Reset Password
          </Button>
        </form>
      </Grid>
      <Footer />
    </>
  );
};

export default ForgotPassword;
