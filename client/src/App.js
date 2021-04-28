import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./context/AppContext";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import userForm from "./pages/UserForm";
import ConfirmationPrompt from "./pages/ConfirmationPrompt";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Patient from "./components/Dashboard/Patient";
import "./App.css";
import ForgotPassword from "./components/ForgetPassword";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={userForm} />
          <Route exact path="/complete" component={ConfirmationPrompt} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/patient/:id" component={Patient} />
          {/* <Route exact path="/onboard" component={UserOnboard} /> */}
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          {/*<Route exact path="/resetpassword" component={ResetPassword} />*/}
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
