import React, { useState, useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import HamBurger from "./HamBurger";
import Footer from "./Footer";
import axios from "axios";

const Login = () => {
  let history = useHistory();
  const [formData, setFormData] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AppContext);
  // const classes = useStyles();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/users/login", formData);
    setCurrentUser(response.data);
    history.push("/dashboard");
  };

  return (
    <>
      <HamBurger />

      <Grid className="login">
        <h1 className="headerTitle">Login Second Appinion</h1>
        <form onSubmit={handleSubmit}>
          <h4>Email</h4>
          <TextField
            className="text"
            variant="outlined"
            onChange={handleChange}
          />
          <h4>Password</h4>
          <TextField
            type="password"
            className="text"
            variant="outlined"
            onChange={handleChange}
          />
          <Link to="/dashboard">
            <Button variant="contained" size="large" id="bookbutton">
              Sign In
            </Button>
          </Link>
        </form>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
