import React, { useEffect, useState } from "react";
import {
  addUsers,
  createUser,
  deleteUserApi,
  updateUserApi,
} from "./services/apiServices";
import Modal from "./Modal";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const data = await addUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function addUserSubmit(e) {
    e.preventDefault();
    try {
      await createUser(form);
      setForm({ name: "", email: "" });
      await loadUsers();
    } catch (error) {
      console.error("Error during user submission:", error);
    }
  }

  async function deleteUser(id) {
    try {
      await deleteUserApi(id);
      await loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  function openModal(user) {
    setCurrentUser(user);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setCurrentUser(null);
  }

  async function saveUser(updatedUser) {
    try {
      await updateUserApi(updatedUser._id, updatedUser);
      await loadUsers();
      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={addUserSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className={styles.editButton}
                    onClick={() => openModal(user)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <Modal user={currentUser} onClose={closeModal} onSave={saveUser} />
      )}
    </div>
  );
}

export default App;
