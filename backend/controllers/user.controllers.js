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

