import React, { useState } from "react";
import { Toolbar, AppBar, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import secondAppLogo from "../Images/SecondAppLogo.svg";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" color="#E8E8E8" elevation="none">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={secondAppLogo} alt="second apinion logo" />
          <MenuIcon onClick={handleClick} style={{ color: "#09015D, 100%" }} />
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
              to="/about"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <MenuItem>About</MenuItem>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <MenuItem>Login</MenuItem>
            </Link>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
