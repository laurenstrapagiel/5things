import "./exercise.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function Exercise() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  //set form data
  const [formData, setFormData] = useState({
    id: uuidv4(),
    user_id: "",
    created_at: new Date(),
    location: "",
    see_1: "",
    see_2: "",
    see_3: "",
    see_4: "",
    see_5: "",
    touch_1: "",
    touch_2: "",
    touch_3: "",
    touch_4: "",
    hear_1: "",
    hear_2: "",
    hear_3: "",
    smell_1: "",
    smell_2: "",
    taste_1: "",
    rating_after: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation

    if (
      !formData.location.trim() ||
      !formData.rating_before ||
      !formData.see_1.trim() ||
      !formData.see_2.trim() ||
      !formData.see_3.trim() ||
      !formData.see_4.trim() ||
      !formData.see_5.trim() ||
      !formData.touch_1.trim() ||
      !formData.touch_2.trim() ||
      !formData.touch_3.trim() ||
      !formData.touch_4.trim() ||
      !formData.hear_1.trim() ||
      !formData.hear_2.trim() ||
      !formData.hear_3.trim() ||
      !formData.smell_1.trim() ||
      !formData.smell_2.trim() ||
      !formData.taste_1.trim() ||
      !formData.rating_after
    ) {
      setErrorMessage("You missed a field. Please try again.");
      return;
    }

    //connect to endpoint

    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated");
      }

      await axios.post(
        "https://things5-6d22dee75a3a.herokuapp.com/exercises",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/profile");
    } catch (error) {
      setErrorMessage("Error submitting form. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //handle steps
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  //render form steps

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3>
              Let's go through each step one by one. Start with sharing where
              you are right now.
            </h3>
            <input
              className={
                formData.location === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="location"
              placeholder="Your current location..."
              value={formData.location}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <h3>How would you rate your anxiety right now?</h3>
            <div className="form__radial-container">
              <label className="form__radial_label">1</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_before"
                  value="1"
                  checked={formData.rating_before === "1"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">2</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_before"
                  value="2"
                  checked={formData.rating_before === "2"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">3</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_before"
                  value="3"
                  checked={formData.rating_before === "3"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">4</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_before"
                  value="4"
                  checked={formData.rating_before === "4"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">5</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_before"
                  value="5"
                  checked={formData.rating_before === "5"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3>What are five things you can see?</h3>
            <input
              className={
                formData.see_1 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="see_1"
              placeholder="Something you can see..."
              value={formData.see_1}
              onChange={handleChange}
            />
            <input
              className={
                formData.see_2 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="see_2"
              placeholder="Something you can see..."
              value={formData.see_2}
              onChange={handleChange}
            />
            <input
              className={
                formData.see_3 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="see_3"
              placeholder="Something you can see..."
              value={formData.see_3}
              onChange={handleChange}
            />
            <input
              className={
                formData.see_4 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="see_4"
              placeholder="Something you can see..."
              value={formData.see_4}
              onChange={handleChange}
            />
            <input
              className={
                formData.see_5 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="see_5"
              placeholder="Something you can see..."
              value={formData.see_5}
              onChange={handleChange}
            />
          </>
        );

      case 4:
        return (
          <>
            <h3>What are four things you can touch?</h3>
            <input
              className={
                formData.touch_1 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="touch_1"
              placeholder="Something you can touch..."
              value={formData.touch_1}
              onChange={handleChange}
            />
            <input
              className={
                formData.touch_2 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="touch_2"
              placeholder="Something you can touch..."
              value={formData.touch_2}
              onChange={handleChange}
            />
            <input
              className={
                formData.touch_3 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="touch_3"
              placeholder="Something you can touch..."
              value={formData.touch_3}
              onChange={handleChange}
            />
            <input
              className={
                formData.touch_4 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="touch_4"
              placeholder="Something you can touch..."
              value={formData.touch_4}
              onChange={handleChange}
            />
          </>
        );
      case 5:
        return (
          <>
            <h3>What are three things you can hear?</h3>
            <input
              className={
                formData.hear_1 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="hear_1"
              placeholder="Something you can hear..."
              value={formData.hear_1}
              onChange={handleChange}
            />
            <input
              className={
                formData.hear_2 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="hear_2"
              placeholder="Something you can hear..."
              value={formData.hear_2}
              onChange={handleChange}
            />
            <input
              className={
                formData.hear_3 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="hear_3"
              placeholder="Something you can hear..."
              value={formData.hear_3}
              onChange={handleChange}
            />
          </>
        );
      case 6:
        return (
          <>
            <h3>What are two things you can smell?</h3>
            <input
              className={
                formData.smell_1 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="smell_1"
              placeholder="Something you can smell..."
              value={formData.smell_1}
              onChange={handleChange}
            />
            <input
              className={
                formData.smell_2 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="smell_2"
              placeholder="Something you can smell..."
              value={formData.smell_2}
              onChange={handleChange}
            />
          </>
        );
      case 7:
        return (
          <>
            <h3>What is one thing you can taste?</h3>
            <input
              className={
                formData.taste_1 === "" && errorMessage
                  ? "form-input form-input--error-state"
                  : "form-input"
              }
              type="text"
              name="taste_1"
              placeholder="Something you can taste..."
              value={formData.taste_1}
              onChange={handleChange}
            />
          </>
        );
      case 8:
        return (
          <>
            <h3>Good job! How would you rate your anxiety now?</h3>
            <div className="form__radial-container">
              <label className="form__radial_label">1</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_after"
                  value="1"
                  checked={formData.rating_after === "1"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">2</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_after"
                  value="2"
                  checked={formData.rating_after === "2"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">3</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_after"
                  value="3"
                  checked={formData.rating_after === "3"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">4</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_after"
                  value="4"
                  checked={formData.rating_after === "4"}
                  onChange={handleChange}
                />
              </div>
              <label className="form__radial_label">5</label>
              <div className="form__radial-item">
                <input
                  className="radio"
                  type="radio"
                  name="rating_after"
                  value="5"
                  checked={formData.rating_after === "5"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="exercise">
      <h1 className="exercise__header">Exercise</h1>
      <p className="exercise__intro">
        You must <Link to="/login">login</Link> to keep track of your exercises.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        {renderStep()}
        <div className="form__buttons">
          {currentStep > 1 && (
            <button
              className="form__back-button"
              type="button"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {currentStep < 8 && (
            <button
              className="form__next-button"
              type="button"
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {currentStep === 8 && (
            <button className="form__submit-button" type="submit">
              Done!
            </button>
          )}
        </div>
        {errorMessage && <p className="form__error-message">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Exercise;
