import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Mainview from "../components/Dashboard/Mainview";
import Header from "../components/Dashboard/Header";
import axios from "axios";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  const { forms, setForms } = useContext(AppContext);

  const fetchData = async () => {
    const response = await axios.get("/api/forms/");
    setForms(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <Sidebar />
      <Header />
      <Mainview formData={forms} />
    </div>
  );
};

export default Dashboard;
