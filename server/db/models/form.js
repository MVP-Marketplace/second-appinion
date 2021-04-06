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
      // required: true,
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
    lastDentalVisit: {
      type: String,
      required: true,
    },
    dentalWorkNeeded: {
      type: String,
      required: true,
    },
    dentistTold: {
      type: String,
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
    painCause: {
      type: String,
      required: true,
    },
    painLingering: {
      type: String,
      required: true,
    },
    painWorsen: {
      type: String,
      required: true,
    },
    painBiteRelease: {
      type: String,
      required: true,
    },
    cavitiesBefore: {
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
    additionalInformationForDentist: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completedBy: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
