
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import PlantsList from "./components/PlantsList";
import NewPlant from "./components/NewPlant";

import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/ProtectedRoute";
import Navigation from "./components/Navigation";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div>
      
      {localStorage.getItem('token') && <Navigation/>}
      <Switch>
        <Route path={"/RegisterForm"}>
          <RegisterForm />
        </Route>
        <Route path='/login' >
          <LoginForm setUserId={setUserId} />
        </Route>
        <PrivateRoute path='/plants' component={()=><PlantsList userId={userId} setUserId={setUserId}/>} />
        <PrivateRoute path='/newplant' component={NewPlant} />
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
