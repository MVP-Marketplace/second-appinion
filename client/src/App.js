import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppContextProvider } from "./context/AppContext";
import Welcome from "./components/Welcome";
import userForm from "./pages/UserForm";
import ConfirmationPrompt from "./pages/ConfirmationPrompt";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Confirm from "./components/Form/Confirm";
import "./App.css";

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
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/onboard" component={UserOnboard} /> */}
          {/*<Route exact path="/resetpassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
