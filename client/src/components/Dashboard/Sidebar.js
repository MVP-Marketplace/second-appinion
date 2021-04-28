import React, { useContext } from "react";
import dashboardlogo from "../../Images/DashboardLogo.png";
import circled from "../../Images/circled.png";
import ButtonMailto from "../../utils/ButtonMailto";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function Sidebar() {
  const { setCurrentUser } = useContext(AppContext);
  let history = useHistory();
  const handleLogout = async () => {
    try {
      await axios.post("/api/users/logout");
      sessionStorage.removeItem("user");
      setCurrentUser(null);
      swal("You are Logged Out");
      history.push("/");
    } catch (e) {
      swal("Oops", "Something went wrong");
    }
  };
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
          <img src={circled} alt="Question Mark" className="xclamation-mark" />
          <button className="sidebarlinks" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
