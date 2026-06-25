import Form from "../models/Form.js";

// Create a new form
export const createForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newForm = new Form({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newForm.save();
    res.status(201).json({
      message: "Form submitted successfully",
      data: newForm,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all forms
export const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: forms.length,
      data: forms,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get form by ID
export const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.json({ success: true, data: form });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update form
export const updateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, message } = req.body;

    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phone, message },
      { new: true, runValidators: true },
    );

    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.json({
      message: "Form updated successfully",
      data: updatedForm,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete form
export const deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id);

    if (!deletedForm) {
      return res.status(404).json({ error: "Form not found" });
    }

    res.json({
      message: "Form deleted successfully",
      data: deletedForm,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
