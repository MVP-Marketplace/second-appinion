import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Mainview from "../components/Dashboard/Mainview";
import Header from "../components/Dashboard/Header";
import axios from "axios";
import Sidebar from "../components/Dashboard/Sidebar";
import "../styles/Dashboard.css";

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
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-inner">
        <Header />
        <Mainview formData={forms} />
      </div>
    </div>
  );
};

export default Dashboard;
