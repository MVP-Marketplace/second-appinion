import React from "react";
import Home from "../Images/Home.svg";
import { Link } from "react-router-dom";
import Hand from "../Images/Hand.svg";
import DentalRecord from "../Images/DentalRecord.svg";
import Assitance from "../Images/Assitance.svg";
import { Button } from "@material-ui/core";

import "../styles/Home.css";

const HomeBody = () => {
  return (
    <>
      <div className="container">
        <div className="headerHome">
          <h1 className="headerTitle">Use Second Appinion</h1>
          <p>Send your x-rays to an unbiased dentist for a second opinion.</p>
        </div>
        <div className="wrapper">
          <img
            className="homeImg"
            src={Home}
            alt="Customer in a Dentist Chair"
          />
        </div>
        <div className="wrapper">
          <Link className="button-link" to="/form">
            <Button variant="contained" size="large" id="bookbutton">
              Start Here
            </Button>
          </Link>
        </div>
        <div>
          <h2>How It Works?</h2>
          <div className="square-icons-container">
            <div className="square-icon">
              <img src={Hand} alt="Hand Holding Xray" className="blue-icon" />
              <p>Upload your Dental X-rays</p>
            </div>
            <div className="square-icon">
              <img src={DentalRecord} alt="Dental Record" />
              <p className="p">Explain your oral issue</p>
            </div>
            <div className="square-icon">
              <img src={Assitance} alt="" />
              <p>Receive your second opinion</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
