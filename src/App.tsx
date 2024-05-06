import classNames from "classnames";
import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const App: React.FC = () => {
  const getIsActive = ({ isActive }: { isActive: boolean }) =>
    classNames("navbar-item", { "is-active": isActive });
  const getStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "red" : "",
  });
  const { userId } = useParams();
  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src="/logo.svg" alt="MA" className="logo" />
          </NavLink>

          <NavLink to="/" className={getIsActive} style={getStyle}>
            Home
          </NavLink>

          <NavLink to="users" end  className={getIsActive} style={getStyle}>
            Users
          </NavLink>

          <NavLink to="posts" className="navbar-item" style={getStyle}>
            Posts
          </NavLink>
          {userId && (
            <NavLink
              to={`/users/${userId}/posts`}
              className="navbar-item"
              style={getStyle}
            >
              User {userId} Posts
            </NavLink>
          )}
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
