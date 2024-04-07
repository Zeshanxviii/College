import React, { useContext, useRef, useState } from "react";
import "./index.scss";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const idRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    // Hardcoded values for demonstration (replace with your own)
    const hardcodedUsername = "admin";
    const hardcodedPassword = "adminpassword";

    if (id === hardcodedUsername && password === hardcodedPassword) {
      dispatch({
        type: "login",
        payload: {
          token: "mocktoken", // Mock token for demonstration
          user: { id: id, isAdmin: true }, // Mock user for demonstration
        },
      });
    } else {
      setError("Invalid username or password");
    }
  };

  return !state.isLoggedIn ? (
    <div>
      <nav className="navigation">
        <h1>
          Saint Andrews Institute Technology and Management Enterprises Resource
          Planner
        </h1>
      </nav>
      <div className="login">
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <label>ID</label>
          <input ref={idRef} type="text" required />
          <label>Password</label>
          <input ref={passwordRef} type={"password"} required />
          <button>Log In</button>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Login;

