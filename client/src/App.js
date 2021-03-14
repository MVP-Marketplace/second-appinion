import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import userForm from "./pages/UserForm";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={userForm} />
        {/* <Route exact path="/welcome" component={WelcomePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <Route exact path="/complete" component={Congrats} />
          <Route exact path="/results" component={Results} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
