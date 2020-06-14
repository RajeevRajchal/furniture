import React from "react";
import "./admin.scss";
import Sidebar from "./containers/Sidebar";
import Nav from "./containers/Nav";
import AdminRoute from "./route/AdminRoute";

const Admin = props => {
  return (
    <main className="admin d-flex">
      <Sidebar title={"WoodLand"} user_name={"john doe"}/>
      <div className="main-content d-flex flex-column">
        <Nav />
        <div className="content flex-1">
          <AdminRoute />
        </div>
      </div>
    </main>
  );
};
export default Admin;
