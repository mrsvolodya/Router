import classNames from "classnames";
import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
const getIsActive = ({ isActive }: { isActive: boolean }) =>
  classNames("navbar-item", { "is-active": isActive });
const getStyleBreadCrumps = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "bold" : "normal",
});

export const App: React.FC = () => {
  const { userId } = useParams();
  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <NavLink to="/" end className="navbar-item">
            <img src="/logo.svg" alt="MA" className="logo" />
          </NavLink>

          <NavLink
            to="/"
            end
            className={getIsActive}
            style={getStyleBreadCrumps}
          >
            Home
          </NavLink>

          <NavLink
            to="users"
            className={getIsActive}
            style={getStyleBreadCrumps}
          >
            Users
          </NavLink>

          <NavLink
            to="posts"
            className={getIsActive}
            style={getStyleBreadCrumps}
          >
            Posts
          </NavLink>
          {userId && (
            <NavLink
              to="users"
              className={getIsActive}
              style={{ color: "brown", fontWeight: "bold" }}
            >
              User {userId}
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
