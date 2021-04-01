import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/PlantsList";
import NewPlant from "./components/NewPlant";
import IndividualPlant from "./components/IndividualPlant";
import PlantsForm from "./components/PlantsForm";
import UserInfo from "./components/UserInfo";
import EditUser from "./components/EditUser";

import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <PrivateRoute path='/plants/new' component={NewPlant} />
        <PrivateRoute path='/plants' component={PlantsList} />
        <PrivateRoute path='/user/edit' component={EditUser} />
        <PrivateRoute path='/user' component={UserInfo} />

        <PrivateRoute path='/plant/:plantId/edit' component={PlantsForm} />
        <PrivateRoute path='/plant/:plantId' component={IndividualPlant} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
