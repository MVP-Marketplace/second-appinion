import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  toolBar: {
    background: "#4972A3",
  },
  Action: {
    color: "whitesmoke",
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BottomNavigation className={classes.toolBar}>
        <BottomNavigationAction
          className={classes.Action}
          label="Facebook"
          value="recents"
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          className={classes.Action}
          label="Recents"
          value="recents"
          icon={<InstagramIcon />}
        />
        <BottomNavigationAction
          className={classes.Action}
          label="Recents"
          value="recents"
          icon={<TwitterIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default Footer;
