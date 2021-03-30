import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserOnboard from "./pages/UserOnboard";
import Welcome from "./components/Welcome";
import userForm from "./pages/UserForm";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={userForm} />

        <Route exact path="/welcome" component={Welcome} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
        {/* <Route exact path="/onboard" component={UserOnboard} /> */}
        {/*<Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/updatepassword" component={UpdatePassword} />
          <Route exact path="/complete" component={Congrats} />
          <Route exact path="/results" component={Results} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
