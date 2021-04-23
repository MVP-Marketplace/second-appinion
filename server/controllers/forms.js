const mongoose = require("mongoose"),
  { sendConfirmationEmail } = require("../emails/"),
  cloudinary = require("cloudinary").v2,
  Form = require("../db/models/form");

// ***********************************************//
// Create form
// ***********************************************//
exports.createForm = async (req, res) => {
  const form = await new Form({
    ...req.body,
  });
  try {
    form.save();
    sendConfirmationEmail(form.email);
    res.status(201).json(form);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

/**
 * @param {image}
 * Upload xray image
 * @return {}
 */
exports.uploadXray = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.xrayUpload.tempFilePath
    );
    req.form.xrayUpload = response.secure_url;
    await req.form.save();
    res.json(response);
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

// ***********************************************//
// Get specific form
// ***********************************************//
exports.getSpecificForm = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send("Not a valid form id");

  try {
    const form = await Form.findOne({ _id });
    if (!form) return res.status(404).send("Form not found");
    res.json(form);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get all forms
// /forms?completed=true
// /forms?limit=10&skip=10
// /forms?sortBy=createdAt:asc
// /forms?sortBy=dueDate:desc
// ***********************************************//
exports.getAllForms = async (req, res) => {
  try {
    const allForms = await Form.find({});
    res.json(allForms);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Delete form
// ***********************************************//
exports.deleteForm = async (req, res) => {
  try {
    const form = await Form.findOneAndDelete({
      _id: req.params.id,
    });
    if (!form) return res.status(404).json({ error: "Form not found" });
    res.json({ message: "Form has been deleted." });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
