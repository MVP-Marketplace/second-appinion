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
    imageUpload: {
      type: String,
    },
    age: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
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
      trim: true,
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
    },
    painDuration: {
      type: String,
    },
    painCause: {
      type: String,
    },
    painLingering: {
      type: String,
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
