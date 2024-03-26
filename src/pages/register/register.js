import "./register.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  document.title = "5Things | Register";

  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match, please try again.");
        return;
      }

      if (!formData.username) {
        setErrorMessage("Please enter a username.");
        return;
      }

      await axios.post("http://localhost:8080/register", {
        username: formData.username,
        password: formData.password,
      });

      setErrorMessage(null);
      setFormData({ username: "", password: "", confirmPassword: "" });
      e.target.reset();
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="register">
      <h1>Register</h1>
      <form className="register__form" onSubmit={handleSignup}>
        <h3>Username:</h3>
        <input
          className="form-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <h3>Password:</h3>
        <input
          className="form-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <h3>Confirm Password:</h3>
        <input
          className="form-input"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button className="login__submit" type="submit">
          Submit
        </button>
        {errorMessage && (
          <p className="register__error-message">{errorMessage}</p>
        )}
      </form>
    </section>
  );
}

export default Register;
