const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const {
  createUser,
  loginUser,
  ValidateUserController,
} = require("../controllers/user.controllers.js");
const { protect } = require("../middleware/protect.js");
;
routes.route("/login").post(loginUser);
routes.route("/signUp").post(createUser);
routes.route("/validate").get(protect, ValidateUserController);

module.exports = routes;
