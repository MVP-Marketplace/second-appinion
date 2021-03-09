import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-column-1">
          <p>About us</p>
          <p>Services</p>
          <p>FAQ</p>
          <div className="footer-bottom-row">
            <p>Social</p>
            <div className="footer-bottom-row__icons">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
