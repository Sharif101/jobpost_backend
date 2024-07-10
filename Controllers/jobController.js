const Job = require("../Model/jobModel");

const addJob = async (req, res) => {
  const { category, title, salary, location, requirement, description } =
    req.body;
  try {
    const job = await Job.create({
      category,
      title,
      salary,
      location,
      requirement,
      description,
    });
    if (job) {
      res.status(201).json({
        _id: job._id,
        category: job.category,
        title: job.title,
        salary: job.salary,
        location: job.location,
        requirement: job.requirement,
        description: job.description,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//get job by category
const getalljob = async (req, res) => {
  const value = req.params.category;
  const jobs = await Job.find({ category: value });
  res.send(jobs);
};

//single job delete
const deletejob = async (req, res) => {
  const id = req.params.id;
  const dltjob = await Job.deleteOne({ _id: id });
  res.send(dltjob);
};

//single job edit
const updatejob = async (req, res) => {
  const id = req.params.id;
  const updatevalue = req.body;
  const filter = { _id: id };
  const upjob = await Job.findOneAndUpdate(filter, updatevalue, {
    new: true,
  });
  res.send(upjob);
};

module.exports = {
  addJob,
  getalljob,
  deletejob,
  updatejob,
};
