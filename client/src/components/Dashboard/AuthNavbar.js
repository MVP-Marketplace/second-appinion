import React, { useState, useContext } from "react";
import { Toolbar, AppBar, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import secondAppLogo from "../../Images/SecondAppLogo.svg";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ButtonMailto from "../../utils/ButtonMailto";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "#4972A3",
    color: "whitesmoke",
    minHeight: "30vh",
    minWidth: "30vw",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#f9fbff", color: "#09015D" }}
        elevation="none"
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <img src={secondAppLogo} alt="second apinion logo" />
          </Link>
          <MenuIcon onClick={handleClick} />
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            paper={{ background: "#4972A3" }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <MenuItem>Dashboard</MenuItem>
            </Link>

            <MenuItem>
              <ButtonMailto
                className="mailto-button"
                label="Help"
                mailto="mailto:mvp@makeitmvp.com"
              />
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
