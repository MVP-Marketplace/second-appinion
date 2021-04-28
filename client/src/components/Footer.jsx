import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { AppBar, Toolbar, IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        className={classes.appBar}
        color="none"
        style={{ color: "whitesmoke", backgroundColor: "#4972A3" }}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <TwitterIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
