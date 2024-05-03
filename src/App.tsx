import classNames from "classnames";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const App: React.FC = () => {
  const getIsActive = ({isActive}: {isActive: boolean}) => classNames("navbar-item", {'is-active': isActive})
  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src="/logo.svg" alt="MA" className="logo" />
          </NavLink>

          <NavLink to="/" className={getIsActive}>
            Home
          </NavLink>

          <NavLink to="users" className={getIsActive}>
            Users
          </NavLink>

          <NavLink to="posts" className="navbar-item">
            Posts
          </NavLink>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
