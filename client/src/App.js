import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/PlantsList";
import NewPlant from "./components/NewPlant";
import IndividualPlant from "./components/IndividualPlant";
import PlantForm from "./components/PlantsForm";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/ProtectedRoute";
import Navigation from "./components/Navigation";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div>
<<<<<<< HEAD
      
      {localStorage.getItem('token') && <Navigation/>}
=======
>>>>>>> 70b43dbef2c6c1c90716d977f9c04089676412da
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
        {/* <PrivateRoute path='/newplant' component={PlantForm} /> */}
        <PrivateRoute path='/plant/:plantId/edit' component={PlantForm} />
        <PrivateRoute path='/plant/:plantId' component={IndividualPlant} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
