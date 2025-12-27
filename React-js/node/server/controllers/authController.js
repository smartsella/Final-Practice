import Personal from "../models/schema.js";

//added the data
export const authController = async (req, res) => {
  try {
    const data = await Personal.create(req.body);
    res.status(201).json({ msg: "Successfully added", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//find the data
export const authgeted = async (req, res) => {
  try {
    const getdata = await Personal.find();
    res.status(200).json({ data: getdata });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//updata the data
export const authUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Personal.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: "Record not found" });
    res.status(200).json({ msg: "Successfully updated", data: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete the data
export const authDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Personal.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Record not found" });
    res.status(200).json({ msg: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
