import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./login.scss";

function Login() {
  const navigate = useNavigate();

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      });

      sessionStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      setIsLoginError(false);
      setErrorMessage(null);

      e.target.reset();
      navigate("/profile");
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoginError(true);
      setErrorMessage(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <h3>Username:</h3>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <h3>Password:</h3>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
