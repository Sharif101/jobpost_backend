const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    title: {
      type: String,
    },
    salary: {
      type: String,
    },
    location: {
      type: String,
    },
    requirement: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
