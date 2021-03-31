import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/PlantsList";
import NewPlant from "./components/NewPlant";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  const [userId, setUserId] = useState(0);

  return (
    <div>
      Water My Plants
      <Switch>
        <Route path={"/RegisterForm"}>
          <RegisterForm />
        </Route>
        <Route path='/login' setUserId={setUserId} >
          <LoginForm />
        </Route>
        <PrivateRoute path='/plants' component={PlantsList} userId={userId} />
        <PrivateRoute path='/newplant' component={NewPlant} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
