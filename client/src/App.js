import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./context/AppContext";
import PrivateRoute from "./utils/PrivateRoute";
import userForm from "./pages/UserForm";
import ConfirmationPrompt from "./pages/ConfirmationPrompt";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import Patient from "./components/Dashboard/Patient";
import Navbar from "./components/Navbar";
import "./App.css";
import ForgotPassword from "./components/Admin/ForgetPassword";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={userForm} />
          <Route exact path="/complete" component={ConfirmationPrompt} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/patient/:id" component={Patient} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
