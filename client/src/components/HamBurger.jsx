import React from "react";
import Logo from "../Images/Logo.png";
import {
  // AppBar,
  // Toolbar,
  IconButton,
  Modal,
  MenuItem,
  // makeStyles,
  // Drawer,
  Menu,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//   return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '30vw',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[0],
    // padding: theme.spacing(2, 4, 3),
    // width: '30px',
    // height: '100px',
  },
}));

const HamBurger = () => {
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="second-appinion-navbar">
        <a href="/">
          <img
            src={Logo}
            alt="Second Appinion Logo"
            className="second-appinion-logo"
          ></img>
        </a>
        <IconButton className="hamburger-button" onClick={handleOpen}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </nav>

      <Modal open={open} onClose={handleClose} className="modal-container">
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
      </Modal>
    </>
  );
};
export default HamBurger;
