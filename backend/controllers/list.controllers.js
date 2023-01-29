const Job = require("../model/Job");
const ErrorResponse = require("../middleware/error");
const asyncHandler = require("../middleware/asyncHandler");
const axios = require("axios");

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return next(new ErrorResponse("No User", 400));
  }
  res.status(200).json({ success: true, data: user });
});

exports.addJob = asyncHandler(async (req, res, next) => {
  const { title, description, salary, location, minQualification, skills } =
    req.body;
  const hr = req.user;
  if (
    !title ||
    !description ||
    !salary ||
    !location ||
    !minQualification ||
    !skills
  ) {
    return next(new ErrorResponse("Please fill all the fields", 400));
  }
  let jobData = {
    title,
    description,
    salary,
    location,
    minQualification,
    skills,
  };
  jobData.createdBy = hr._id;
  data = {
    description,
    skills,
    location,
  };
  const response = await axios.post(
    "https://flask-api-resume-1.onrender.com/recommend_resume",
    data
  );
  let employeeList = response.data;
  for (let i = 0; i < employeeList.length; i++) {
    employeeList[i].interview = false;
  }
  jobData.selectedEmployee = employeeList;
  const job = await Job.create(jobData);
  if (!job) {
    return next(new ErrorResponse("Job not created", 400));
  }
  res.status(200).json({ success: true, data: job });
});

exports.getJobs = asyncHandler(async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user._id });
  if (!jobs) {
    return next(new ErrorResponse("No jobs found", 404));
  }
  res.status(200).json({ success: true, data: jobs });
});

//job id in params
exports.getJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return next(new ErrorResponse("No job found", 404));
  }
  res.status(200).json({ success: true, data: job });
});

// update the interview status of the employee
exports.saveJobList = asyncHandler(async (req, res, next) => {
  try {
    const { eid, interview } = req.body;
    const job = await Job.findById(req.params.id);
    console.log(job);
    if (!job) {
      return next(new ErrorResponse("No job found", 404));
    }
    let employeeList = job.selectedEmployee;
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].id == eid) {
        employeeList[i].interview = interview;
      }
    }
    job.selectedEmployee = employeeList;
    // use some other mehtod to update the job
    await job.updateOne({ selectedEmployee: employeeList });
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.log(error);
  }
});

exports.getApplicants = asyncHandler(async (req, res, next) => {
  const response = await axios.get("http://127.0.0.1:5000/applicants");
  const applicants = response.data;
  res.status(200).json({ success: true, data: applicants });
});
