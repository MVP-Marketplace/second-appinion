import React, { useState, useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/Admin.css";
import swal from "sweetalert";

const Login = () => {
  let history = useHistory();
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", formData);
      setCurrentUser(response.data);
      console.log(response.data);
      sessionStorage.setItem("user", response.data);
      history.push("/dashboard");
    } catch (e) {
      swal("Invalid credentials");
    }
  };

  return (
    <>
      <Grid className="login">
        <h1 className="headerTitle">Login</h1>
        <form onSubmit={handleSubmit}>
          <h4>Email</h4>
          <TextField
            className="text"
            variant="outlined"
            name="email"
            onChange={handleChange}
          />
          <h4>Password</h4>
          <TextField
            type="password"
            className="text"
            variant="outlined"
            name="password"
            onChange={handleChange}
          />
          <div>
            <Button variant="contained" id="bookbutton" type="submit">
              Sign In
            </Button>
          </div>
        </form>

        <Link to="/forgotpassword">I forgot my password!</Link>
      </Grid>
    </>
  );
};

export default Login;
