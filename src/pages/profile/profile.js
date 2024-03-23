import "./profile.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [userExercises, setUserExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return;
    }

    axios
      .get("http://localhost:8080/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserProfile(response.data.profile);
        setUserExercises(response.data.exercises);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching user profile. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="profile">
      {userProfile && <h1>Hi {userProfile.username}!</h1>}
      <h2>Past Exercises</h2>
      {userExercises.length === 0 ? (
        <p>You haven't done any exercises yet.</p>
      ) : (
        <ul className="profile__list">
          {userExercises.map((exercise) => (
            <li key={exercise.id} className="profile__list-item">
              <h3>Date:</h3> {exercise.created_at}
              <h3>Location:</h3> {exercise.location}
              <h3>Anxiety rating before exercise:</h3> {exercise.rating_before}
              <h3>Five things you could see:</h3> {exercise.see_1},{" "}
              {exercise.see_2}, {exercise.see_3}, {exercise.see_4}, and{" "}
              {exercise.see_5}
              <h3>Four things you could touch:</h3> {exercise.touch_1},{" "}
              {exercise.touch_2}, {exercise.touch_3}, and {exercise.touch_4}
              <h3>Three things you could hear:</h3> {exercise.hear_1},{" "}
              {exercise.hear_2}, and {exercise.hear_3}
              <h3>Two things you could smell:</h3> {exercise.smell_1}, and{" "}
              {exercise.smell_2}
              <h3>One thing you could taste:</h3> {exercise.taste_1}
              <h3>Anxiety rating after exercise:</h3> {exercise.rating_after}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Profile;
