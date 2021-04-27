import React from "react";
import dashboardlogo from "../../Images/DashboardLogo.png";
import circled from "../../Images/circled.png";
import ButtonMailto from "../../utils/ButtonMailto";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img className="dashboard-logo" src={dashboardlogo} alt="logo"></img>
        <div className="sidebar-button">
          <img src={circled} alt="Question Mark" className="question-mark" />
          <ButtonMailto
            className="sidebarlinks"
            label="Help"
            mailto="mailto:mvp@makeitmvp.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
