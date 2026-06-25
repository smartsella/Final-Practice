const API_URL = "http://localhost:5000/api/forms";

// Create a new form
export const createForm = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating form:", error);
    throw error;
  }
};

// Get all forms
export const getAllForms = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching forms:", error);
    throw error;
  }
};

// Get form by ID
export const getFormById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching form:", error);
    throw error;
  }
};

// Update form
export const updateForm = async (id, formData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating form:", error);
    throw error;
  }
};

// Delete form
export const deleteForm = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error deleting form:", error);
    throw error;
  }
};
