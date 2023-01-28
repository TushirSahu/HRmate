const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const { protect } = require("../middleware/protect.js");

const {
  addJob,
  getJobs,
  getJob,
  saveJobList,
  addEmployee
} = require("../controllers/list.controllers.js");

routes.post("/addJob", protect, addJob);
routes.get("/getJobs", protect, getJobs);
routes.get("/:id/getJob", protect, getJob);
routes.post("/:id/saveJobList", protect, saveJobList);
routes.post("/addEmployee", protect, addEmployee);


module.exports = routes;
