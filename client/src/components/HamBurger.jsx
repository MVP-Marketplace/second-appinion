import React from "react";
import Logo from "../Images/Logo.png";
// import { Button, Menu, Grid, MenuItem } from "@material-ui/core/";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

const HamBurger = () => {
  return (
    <>
      <a href="/">
        <img
          src={Logo}
          className="second-appinion-logo"
          alt="Second Appinion Logo"
        ></img>
      </a>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="hamburger-menu">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <ul>
            <li className="nav-item">
              <a href="/" className="navlink">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="specialist" className="navlink">
                Specialist
              </a>
            </li>
            <li className="nav-item">
              <a href="services" className="navlink">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="aboutus" className="navlink">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="faq" className="navlink">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default HamBurger;

// const [anchorEl, setAnchorEl] = React.useState(null);
// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };
// const handleClose = () => {
//   setAnchorEl(null);
// };

// return (
//   <>
//     <Grid className="navbar-container">
//       <a href="/" className="second-appinion-logo">
//         <img src={Logo} alt="Second Appinion Logo" className="" />
//       </a>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MenuIcon className="hamburger-icon" />
//       </Button>
//       <Menu
//         className="nav-links-container"
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         PaperProps={{}}
//       >
//         <MenuItem className="nav-li navbar-expand-lg" onClick={handleClose}>
//           Menu
//           <Button
//             aria-label="close"
//             onClick={handleClick}
//             className="hamburger-close"
//           >
//             <CloseIcon className="hamburger-close"></CloseIcon>
//           </Button>
//         </MenuItem>
//         <MenuItem className="nav-li"></MenuItem>
//         <MenuItem onClick={handleClose} className="nav-li">
//           Specialists
//         </MenuItem>
//         <MenuItem onClick={handleClose} className="nav-li">
//           Services
//         </MenuItem>
//         <MenuItem onClick={handleClose} className="nav-li">
//           About Us
//         </MenuItem>
//         <MenuItem onClick={handleClose} className="nav-li">
//           FAQ
//         </MenuItem>
//       </Menu>
//     </Grid>
