import React from "react";
import { User } from "../types/User";
import { NavLink, useParams } from "react-router-dom";

type Props = {
  users: User[];
};

export const UsersList: React.FC<Props> = ({ users }) => {
  const { userId } = useParams();
  const selectedUserId = userId ? +userId : 0;
  return (
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {user.id === selectedUserId ? (
                <NavLink to="../users" className="icon button is-success">
                  <i className="far fa-eye-slash" />
                </NavLink>
              ) : (
                <NavLink
                  to={`${user.id}/posts`}
                  className="icon button is-success is-inverted"
                >
                  <i className="far fa-eye" />
                </NavLink>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
