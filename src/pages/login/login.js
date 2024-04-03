import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./login.scss";

function Login() {
  document.title = "5Things | Login";

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //connect to login endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.username) {
        setErrorMessage("Please enter a username.");
        return;
      }

      if (!formData.password) {
        setErrorMessage("Please enter a password.");
        return;
      }

      const response = await axios.post(
        "https://things5-6d22dee75a3a.herokuapp.com/login",
        {
          username: e.target.username.value,
          password: e.target.password.value,
        }
      );

      sessionStorage.setItem("token", response.data.token);
      setErrorMessage(null);

      e.target.reset();
      navigate("/profile");
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Incorrect username or password.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <p>
        Not a member? <Link to="/register">Register here.</Link>
      </p>
      <form className="login__form" onSubmit={handleSubmit}>
        <h3>Username:</h3>
        <input
          className="form-input"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <h3>Password:</h3>
        <input
          className="form-input"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="login__submit" type="submit">
          Login
        </button>
        {errorMessage && <p className="login__error-message">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Login;
