import { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrorMessage("");

    login(username, password)
      .then(() => {
        navigate(state?.pathname || "/", { replace: true });
      })
      .catch((error) => setErrorMessage(error.message));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="passwords">Password</label>
      <input
        type="text"
        id="passwords"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <button type="submit">Sign in</button>
    </form>
  );
};
