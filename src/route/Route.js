import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../entities/Admin';
import Landing from '../entities/Landing';
const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" name="landing" component={Landing}  />
      <Route path="/dashboard" name="admin.dashboard" component={Admin} />
    </Switch>
  )
}
export default Routes;