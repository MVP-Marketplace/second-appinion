import React from "react";
import startquestionaire from "../../Images/startquestionaire.png";

const StartQuestionaire = () => {
  return (
    <>
      <div className="start-container">
        <img
          src={startquestionaire}
          alt="Women on Computer"
          className="start-image"
        ></img>
        <h3 className="start-text">
          We want to ensure you receive
          <br />
          a timely second opinion.
          <br />
          Please answer some
          <br />
          questions to better assist you.
        </h3>
      </div>
    </>
  );
};

export default StartQuestionaire;
