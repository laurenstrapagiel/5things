import "./profile.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../../components/deleteModal/deleteModal";
import Badges from "../../components/badges/badges";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [userExercises, setUserExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //delete modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async (event) => {
    closeModal();
    window.location.reload();
  };

  //profile endpoint

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
    return <h2>Please login to see past exercises.</h2>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  //format timestamp

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };

  return (
    <section className="profile">
      {userProfile && <h1>Hi {userProfile.username}!</h1>}
      <p>
        You have completed{" "}
        <span className="profile__exercise-count">{userExercises.length}</span>{" "}
        exercises so far.
      </p>
      <div className="profile__badges-container">
        <Badges userExercises={userExercises} />
      </div>

      {userExercises.length === 0 ? (
        <p>You haven't done any exercises yet.</p>
        
      )  : (
        <ul className="profile__list">
          {userExercises
            .slice()
            .reverse()
            .map((exercise) => (
              <li key={exercise.id} className="profile__list-item">
                <div className="profile__date">
                  {formatTimestamp(exercise.created_at)}
                </div>
                <h3 className="profile__subhead">Location: </h3>
                <p className="profile__data">{exercise.location}</p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  Anxiety rating before exercise:{" "}
                </h3>
                <p className="profile__data">{exercise.rating_before}</p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  Five things you could see:{" "}
                </h3>
                <p className="profile__data">
                  {exercise.see_1}, {exercise.see_2}, {exercise.see_3},{" "}
                  {exercise.see_4}, and {exercise.see_5}
                </p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  Four things you could touch:{" "}
                </h3>
                <p className="profile__data">
                  {exercise.touch_1}, {exercise.touch_2}, {exercise.touch_3},
                  and {exercise.touch_4}
                </p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  Three things you could hear:
                </h3>{" "}
                <p className="profile__data">
                  {exercise.hear_1}, {exercise.hear_2}, and {exercise.hear_3}
                </p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  Two things you could smell:
                </h3>{" "}
                <p className="profile__data">
                  {exercise.smell_1} and {exercise.smell_2}
                </p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  One thing you could taste:
                </h3>{" "}
                <p className="profile__data">{exercise.taste_1}</p>
                <hr className="profile__hr" />
                <h3 className="profile__subhead">
                  Anxiety rating after exercise:{" "}
                </h3>
                <p className="profile__data">{exercise.rating_after}</p>
                <div>
                  <button
                    className="profile__delete-button"
                    onClick={openModal}
                  >
                    Delete
                  </button>
                  <DeleteModal
                    exerciseId={exercise.id}
                    isOpen={isModalOpen}
                    onCancel={closeModal}
                    onConfirm={handleConfirm}
                  />
                </div>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}

export default Profile;
