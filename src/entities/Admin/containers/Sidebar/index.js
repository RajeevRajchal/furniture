import React, { useState } from "react";
import sidebar from "./sidebar";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
const Sidebar = props => {
  const {title, user_name} = props
  const [navIndex, setNavIndex] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <Logo title={title} user_name={user_name}/>
      </div>
      <div className="sidebar-items">
        {sidebar.map((item, key) => (
          <NavLink to={`/dashboard${item.path}`} className={`sidebar-item d-flex align-center ${key === navIndex ? 'active' : ''}`} onClick={() => setNavIndex(key)}  key={key} exact>
            <i className="material-icons">{item.icon}</i>
            <label className="sidebar-title">{item.label}</label>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
