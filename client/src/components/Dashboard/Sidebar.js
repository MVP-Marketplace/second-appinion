import React from "react";
import dashboardlogo from "../../Images/dashboard-logo.png";
import piechart from "../../Images/pie-chart.png";
import circled from "../../Images/circled.png";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img className="dashboard-logo" src={dashboardlogo} alt="logo"></img>
        <h4 className="sidebar-subtitle">Dental</h4>
        <div className="sidebar-button">
          <img src={piechart} alt="Pie Chart" className="piechart-logo"></img>
          <h4 className="sidebarlinks link">PDF Submissions</h4>
        </div>
        <div className="sidebar-button">
          <img
            src={circled}
            alt="Question Mark"
            className="question-mark"
          ></img>
          <h4 className="sidebarlinks">Help</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
