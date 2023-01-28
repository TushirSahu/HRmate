const ErrorResponse = require("../middleware/errorResponse");
const User = require("../model/User");
const asyncHandler = require("../middleware/asyncHandler");
const sendTokenResponse = require("../middleware/token");

exports.ValidateUserController = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if (!username || !email || !password) {
    return next(
      new ErrorResponse(`Please provide name, email and password`, 400)
    );
  }
  const user = await User.create({
    username,
    email,
    password,
  });
  sendTokenResponse(user, 200, res);
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse(`Please provide email and password`, 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }
  sendTokenResponse(user, 200, res);
});

exports.followUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user2 = await User.findById(id);
  const user1 = await User.findById(req.user._id);
  if (!user2) {
    return next(new Error("User not found"));
  }
  if (user2.followers.includes(req.user._id)) {
    return next(new Error("You already follow this user"));
  }
  user2.followers.push(user1._id);
  user1.following.push(user2._id);
  await user1.save();
  await user2.save();
  console.log(user1);
  console.log(user2);
  res.status(200).json({
    success: true,
  });
});

exports.unfollowUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new Error("User not found"));
  }
  if (!user.followers.includes(req.user._id)) {
    return next(new Error("You don't follow this user"));
  }

  const updatedUser = await User.findById(req.user._id);
  updatedUser.following = updatedUser.following.filter(
    (following) => following.toString() !== user._id.toString()
  );
  await updatedUser.save();
  const reqUpdatedUser = await User.findById(user._id);
  reqUpdatedUser.followers = reqUpdatedUser.followers.filter(
    (follower) => follower.toString() !== req.user._id.toString()
  );
  await reqUpdatedUser.save();
  res.status(200).json({
    success: true,
  });
});
