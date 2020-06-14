import React from "react";
import { Switch, Route } from 'react-router-dom'
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";
import Category from "../views/Category";

const AdminRoute = props => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" name="admin.dashboard" component={Dashboard} exact />
        <Route path="/dashboard/profile" name="admin.profile" component={Profile} exact />
        <Route path="/dashboard/category" name="admin.category" component={Category} exact />
      </Switch>
    </>
  );
};
export default AdminRoute;
