import React from "react";
import startquestionaire from "../../Images/startquestionaire.png";
import "../../styles/onboard.css";

const StartQuestionaire = () => {
  return (
    <>
      <div className="onboard">
        <img
          src={startquestionaire}
          alt="Women on Computer"
          className="start-image"
        ></img>
        <h1 className="onboardSubTitle">
          We want to ensure you receive
          <br />
          a timely second opinion.
          <br />
          Please answer some
          <br />
          questions to better assist you.
        </h1>
      </div>
    </>
  );
};

export default StartQuestionaire;
