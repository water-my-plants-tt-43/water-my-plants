import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/PlantsList";
import NewPlant from "./components/NewPlant";
import IndividualPlant from "./components/IndividualPlant";
// import EditPlant from "./components/EditPlant";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div>
      <Switch>
        <Route path={"/RegisterForm"}>
          <RegisterForm />
        </Route>
        <Route path='/login'>
          <LoginForm setUserId={setUserId} />
        </Route>
        <PrivateRoute
          path='/plants'
          component={() => <PlantsList userId={userId} setUserId={setUserId} />}
        />
        <PrivateRoute path='/newplant' component={NewPlant} />
        <PrivateRoute path='/plant/:plantId' component={IndividualPlant} />
        {/* <PrivateRoute path='/plant/:plantId/edit' component={EditPlant} /> */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
