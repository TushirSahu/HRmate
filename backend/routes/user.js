const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const {
  createUser,
  loginUser,
  followUser,
  unfollowUser,
  ValidateUserController,
} = require("../controllers/user.controllers.js");
const { protect } = require("../middleware/protect.js");

// const { protect, authorization } = require("../middleware/auth");
routes.route("/login").post(loginUser);
routes.route("/signUp").post(createUser);
routes.route("/validate").get(protect, ValidateUserController);
// routes.route("/")
routes.route("/follow/:id").get(protect, followUser);
routes.route("/unfollow/:id").get(protect, unfollowUser);

module.exports = routes;
