const Content = require("../model/Content");
const Watchlist = require("../model/Watchlist");
const ErrorResponse = require("../middleware/error");
const asyncHandler = require("../middleware/asyncHandler");
const axios = require("axios");
const URL = "http://127.0.0.1:5000";

// create watchlist
exports.createWatchlist = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const watchlist = await Watchlist.create({
    user,
  });
  res.status(200).json({
    success: true,
    data: watchlist,
  });
});

exports.getWatchlist = asyncHandler(async (req, res, next) => {
  const { listId } = req.params;
  const watchlist = await Watchlist.findOne({ _id: listId });
  if (!watchlist) {
    return next(new ErrorResponse(`Watchlist not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: watchlist,
  });
});

// generate watchlist
exports.generateWatchlist = asyncHandler(async (req, res, next) => {
  // we will get a list of 10 content from the api call
  // store it in a new list
  // return the list
  try {
    const user = req.user;
    const watchlist = await Watchlist.create({
      user,
    });
    const {genres} = req.body;
    const response = await axios.post(`${URL}/genre_recommendation`, {
      genres
    });
    const { data } = response;
    console.log(data);
    const contentList = [];
    data.data.map((i) => {
      contentList.push(i)
    })
    watchlist.list = contentList;
    await watchlist.save();
    
    res.status(200).json({
      success: true,
      data: watchlist,
    });
  } catch (error) {
    console.log(error);
  }
});

exports.getGenre = asyncHandler(async (req, res, next) => {
  try {
    const response = await axios.get(`${URL}/genres`);
    const { data } = response;
    console.log(data);
    res.status(200).json({
      success: true,
      data: data.data,
    });
  } catch (error) {
    console.log(error);
  }
});

// add content to watchlist
// list id is in params   which watchlist to add to
// content id is in body  which content to add
exports.addToWatchlist = asyncHandler(async (req, res, next) => {
  const { listId, contentId } = req.params;
  // const { contentId } = req.body;
  const watchlist = await Watchlist.findOne({ _id: listId });
  if (!watchlist) {
    return next(new ErrorResponse(`Watchlist not found`, 404));
  }
  const content = await Content.findOne({ _id: contentId });
  if (!content) {
    return next(new ErrorResponse(`Content not found`, 404));
  }
  if (watchlist.list.includes(contentId)) {
    return next(new ErrorResponse(`Content already in watchlist`, 400));
  }
  watchlist.list.push(contentId);
  await watchlist.save();
  res.status(200).json({
    success: true,
    message: `Content added to watchlist`,
    data: watchlist,
  });
});

// remove content from watchlist
// list id is in params   which watchlist to remove from
// content id is in body  which content to remove
exports.removeFromWatchlist = asyncHandler(async (req, res, next) => {
  const { listId } = req.params;
  const { contentId } = req.body;
  const watchlist = await Watchlist.findOne({ _id: listId });
  if (!watchlist) {
    return next(new ErrorResponse(`Watchlist not found`, 404));
  }
  const content = await Content.findOne({ _id: contentId });
  if (!content) {
    return next(new ErrorResponse(`Content not found`, 404));
  }
  if (!watchlist.list.includes(contentId)) {
    return next(new ErrorResponse(`Content not in watchlist`, 400));
  }
  watchlist.list.pull(contentId);
  await watchlist.save();
  res.status(200).json({
    success: true,
    message: `Content removed from watchlist`,
    data: watchlist,
  });
});

// delete watchlist
exports.deleteWatchlist = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const watchlist = await Watchlist.findOne({ _id: id });
  if (!watchlist) {
    return next(new ErrorResponse(`Watchlist not found`, 404));
  }
  await watchlist.remove();
  res.status(200).json({
    success: true,
    message: `Watchlist deleted`,
    data: watchlist,
  });
});

// get all watchlists of user
exports.getWatchlists = asyncHandler(async (req, res, next) => {
  const user = req.user;
  console.log(user);
  const watchlists = await Watchlist.find({ user });
  res.status(200).json({
    success: true,
    data: watchlists,
  });
});
