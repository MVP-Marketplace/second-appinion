import React, { useState, useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";

const Register = () => {
  let history = useHistory();
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/users/", formData);
    setCurrentUser(response.data);
    history.push("/dashboard");
  };
  return (
    <>
      <Navbar />
      <Grid className="login">
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Name</h4>
            <TextField
              className="text"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Email</h4>
            <TextField className="text" variant="outlined" />
          </div>
          <div>
            <h4>Password</h4>
            <TextField
              className="text"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button variant="contained" size="large" id="bookbutton">
              Join
            </Button>
          </div>
        </form>
      </Grid>
      <Footer />
    </>
  );
};
export default Register;
