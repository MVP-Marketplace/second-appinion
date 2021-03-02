const mongoose = require("mongoose"),
  validator = require("validator");

const formSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    xrayUpload: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dentalPain: {
      type: String,
      required: true,
    },
    painLocation: {
      type: String,
      required: true,
    },
    painStrength: {
      type: String,
      required: true,
      trim: true,
    },
    painDuration: {
      type: String,
      required: true,
    },
    painWorsen: {
      type: String,
      required: true,
    },
    painBiteDown: {
      type: String,
      required: true,
    },
    painBiteRelease: {
      type: String,
      required: true,
    },
    painLingering: {
      type: String,
      required: true,
    },
    painDissipate: {
      type: String,
      required: true,
    },
    lastDentalVisit: {
      type: String,
      required: true,
    },
    dentalWorkNeeded: {
      type: String,
      required: true,
    },
    needCavitiesFilled: {
      type: String,
      required: true,
    },
    fillingsReplaced: {
      type: String,
      required: true,
    },
    rootCanalBefore: {
      type: String,
      required: true,
    },
    toothPulledRemoved: {
      type: String,
      required: true,
    },
    cosmeticDentalSurgery: {
      type: String,
      required: true,
    },
    toothNeedsWork: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completedBy: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
