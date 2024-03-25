import "./deleteModal.scss";
import axios from "axios";

function DeleteModal({ exerciseId, isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  //delete exercise

  const deleteExercise = async () => {
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`http://localhost:8080/exercises/${exerciseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onConfirm();
    } catch (error) {
      console.error("Error deleting exercise:", error);
    }
  };

  return (
    <div className="delete-modal__backdrop">
      <div className="delete-modal">
        <h1>Delete exercise?</h1>
        <p>
          Are you sure you want to delete this exercise? This can't be undone.
        </p>
        <div className="delete-modal__button-wrapper">
          <button
            className="delete-modal__button"
            onClick={() => {
              onCancel();
            }}
          >
            Cancel
          </button>
          <button className="delete-modal__button" onClick={deleteExercise}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
