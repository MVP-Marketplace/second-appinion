import React from "react";
import Footer from "../components/Footer";
import HomeBody from "../components/HomeBody";
import HamBurger from "../components/HamBurger";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <HamBurger />
      <HomeBody />
      <Footer />
    </>
  );
};

export default Home;
