import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Forget from "./components/Forget";
import Home from "./components/Home";
import Errorpage from "./components/Errorpage";
import "./App.css";

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/home" ><Home /> </Route>
      <Route exact path="/signin" ><Signin /> </Route>
      <Route exact path="/" ><Signup /> </Route>
      <Route exact path="/forget" ><Forget /> </Route>
      <Route path="*"><Errorpage /> </Route>
    </Switch>
    </>
  );
};

export default App;
