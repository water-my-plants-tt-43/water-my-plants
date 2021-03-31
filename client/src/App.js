
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/PlantsList";

import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div>
      
      
      <Switch>
        <Route path={"/RegisterForm"}>
          <RegisterForm />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <PrivateRoute path='/plants' component={PlantsList} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
