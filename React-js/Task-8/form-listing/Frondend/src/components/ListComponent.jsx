import { useState, useEffect } from "react";
import { getAllForms, deleteForm, updateForm } from "../services/api";
import "./ListComponent.css";

function ListComponent({ refreshTrigger }) {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchForms();
  }, [refreshTrigger]);

  const fetchForms = async () => {
    try {
      setLoading(true);
      const response = await getAllForms();
      if (response.success) {
        setForms(response.data);
      }
      setError("");
    } catch (err) {
      setError("Failed to load forms");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      try {
        await deleteForm(id);
        setForms(forms.filter((form) => form._id !== id));
      } catch (err) {
        setError("Failed to delete form");
      }
    }
  };

  const handleEdit = (form) => {
    setEditingId(form._id);
    setEditData({ ...form });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = async () => {
    try {
      await updateForm(editingId, editData);
      setForms(forms.map((form) => (form._id === editingId ? editData : form)));
      setEditingId(null);
      setEditData(null);
    } catch (err) {
      setError("Failed to update form");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading)
    return (
      <div className="list-container">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="list-container">
        <p className="error">{error}</p>
      </div>
    );

  return (
    <div className="list-container">
      <h2>Submitted Forms ({forms.length})</h2>

      {forms.length === 0 ? (
        <p className="no-data">No forms submitted yet</p>
      ) : (
        <div className="forms-list">
          {forms.map((form) => (
            <div key={form._id} className="form-card">
              {editingId === form._id ? (
                <div className="edit-mode">
                  <div className="edit-group">
                    <label>First Name:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={editData.firstName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="edit-group">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={editData.lastName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="edit-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="edit-group">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      name="phone"
                      value={editData.phone}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="edit-group">
                    <label>Message:</label>
                    <textarea
                      name="message"
                      value={editData.message}
                      onChange={handleEditChange}
                      rows="3"
                    />
                  </div>
                  <div className="edit-buttons">
                    <button className="save-btn" onClick={handleSaveEdit}>
                      Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="view-mode">
                  <div className="form-info">
                    <h3>
                      {form.firstName} {form.lastName}
                    </h3>
                    <p>
                      <strong>Email:</strong> {form.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {form.phone}
                    </p>
                    <p>
                      <strong>Message:</strong> {form.message}
                    </p>
                    <p className="date">
                      <strong>Submitted:</strong> {formatDate(form.createdAt)}
                    </p>
                  </div>
                  <div className="form-actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(form)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(form._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListComponent;
