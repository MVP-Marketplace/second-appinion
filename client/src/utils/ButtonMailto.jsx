import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
      target="_blank"
      style={{ textDecoration: "none", color: "whitesmoke" }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
