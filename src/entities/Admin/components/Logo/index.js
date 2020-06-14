import React from "react";
import { Link } from "react-router-dom";
const Logo = props => {
  const {title,user_name} = props
  return (
    <div className="logo-contianer d-flex flex-column">
      <div className="logo-title">{title}</div>
      <div className="logo-user card d-flex align-center">
        <div className="user-img">
          <Link to="/dashboard/profile">
            <img
              src="https://investmentnovel.com/wp-content/uploads/2018/05/17241-200.png"
              alt="user"
            />
          </Link>
        </div>
        <Link to="/dashboard/profile">
          <div className="user_name">{user_name}</div>
        </Link>
      </div>
    </div>
  );
};
export default Logo;
