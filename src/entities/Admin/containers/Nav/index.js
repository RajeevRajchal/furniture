import React from "react";
const Nav = props => {
  return (
    <nav className="d-flex justify-between align-center">
        <div className="nav-title">Dashboard</div>
        <div className="nav-search">
          <input
            type="text"
            name="search_key"
            className="search-input"
            id=""
            placeholder="Search..."
          />
          <i className="material-icons search-icon">search</i>
          <i className="material-icons">exit_to_app</i>
        </div>
    </nav>
  );
};
export default Nav;
