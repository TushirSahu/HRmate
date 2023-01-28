const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const {
  createWatchlist,
  generateWatchlist,
  getWatchlist,
  getWatchlists,
  addToWatchlist,
  removeFromWatchlist,
  deleteWatchlist,
  getGenre,
} = require("../controllers/list.controllers.js");

// const { protect, authorization } = require("../middleware/auth");
const { protect } = require("../middleware/protect.js");

routes.route("/create").get(protect, createWatchlist);
routes.route("/generate").post(protect, generateWatchlist);
routes.route("/genres").get(getGenre);
routes.route("/getList/:listId").get(protect, getWatchlist);
routes.route("/getAllLists").get(protect, getWatchlists);
routes.route("/delete/:id").delete(protect, deleteWatchlist);
routes.route("/:listId/add/:contentId").get(protect, addToWatchlist);
routes.route("/:listId/remove/:contentId").get(protect, removeFromWatchlist);

module.exports = routes;
