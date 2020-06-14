import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Shop from '../views/Shop'

const AdminRoute = props => {
    return (
        <>
            <Switch>
                <Route path="/" name="landing" component={Home} exact />
                <Route path="/shop" name="shop" component={Shop} exact/>
            </Switch>
        </>
    );
};
export default AdminRoute;
