const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  minQualification: {
    type: String,
    enum: ["Bachelors", "Masters", "PhD"],
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
  selectedEmployee: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Employee",
    },
  ],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Job", JobSchema);
