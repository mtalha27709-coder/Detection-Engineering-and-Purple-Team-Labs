import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import deleteImage from "../utils/deleteImage.js";
import { isEmailFormatCorrect } from "../utils/validation.js";

// get users per page
const getUsers = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const users = await User.find()
    .select("-password")
    .skip((page - 1) * limit)
    .limit(limit);
  const total = await User.countDocuments();
  res.status(200).json(new ApiResponse(200, { users, page, limit, total }));
});

// get user by id
const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.query;
  if (!userId || !userId.trim()) {
    throw new ApiError(400, "userId not found in query params");
  }
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res.status(200).json(new ApiResponse(200, { user }));
});

// delete user
const deleteUser = asyncHandler(async (req, res) => {
  let { userId } = req.query;

  if (!userId || !userId.trim()) {
    throw new ApiError(400, "userId not found in query params");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  if (user.role === "admin") {
    throw new ApiError(400, "Admin users cannot be deleted");
  }
  const email = user.email;
  const avatar = user.avatar;
  await user.deleteOne();
  if (avatar) {
    deleteImage(avatar);
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {},
        `User with id:${userId}, email: ${email} deleted successfully`
      )
    );
});

// modify user
const allowedFields = ["email", "name", "avatar", "phone", "role"];
const modifyUser = asyncHandler(async (req, res) => {
  const fields = req.body;
  const { userId } = req.query;
  if (!userId) {
    throw new ApiError(400, "userId not found in query params");
  }
  let updateParams = {};
  for (let i in fields) {
    if (!fields[i] && !fields[i].trim()) continue;
    // check for fields
    if (allowedFields.includes(i)) {
      updateParams[i] = fields[i];
    }
  }
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  if (user.role === "admin") {
    throw new ApiError(400, "Admin user profile cannot be modified");
  }
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $set: updateParams,
    },
    { new: true }
  ).select("-password");

  res
    .status(200)
    .json(new ApiResponse(200, { user: updatedUser }, "Modified successfully"));
});

// create admin account
const createAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;

  // profile img path
  const avatarUrl = req.files?.avatar?.[0].path;

  // delete file if error occured
  req.errCb = () => {
    if (!avatarUrl) return;
    deleteImage(avatarUrl);
  };

  // validate required fields
  if ([name, password].some((i) => !i || i.trim() == "")) {
    throw new ApiError(400, "Name and Password is required.");
  }

  // validate email if exist
  if (email && !isEmailFormatCorrect(email)) {
    throw new ApiError(400, "Email format is not correct.");
  }

  // check at least email or phone no. exist
  if (!email && !phone) {
    throw new ApiError(400, "Email or Phone number is required");
  }

  // check if user exists wtih same phone or email
  let query = [];
  if (email) {
    query.push({ email });
  }
  if (phone) {
    query.push({ phone });
  }
  const existedUser = await User.findOne({
    $or: query,
  });

  if (existedUser) {
    throw new ApiError(
      409,
      "User with same email or phone number already exists."
    );
  }
  const createdUser = await User.create({
    name,
    email,
    phone,
    password,
    avatar: avatarUrl || "",
    role: "admin",
  });

  const user = await User.findById(createdUser._id).select("-password");

  if (!createdUser || !user) {
    throw new ApiError(
      500,
      "Something went wrong while creating the admin user."
    );
  }

  res
    .status(201)
    .json(new ApiResponse(200, { user }, "Admin user created successfully"));
});

export { getUsers, getUserById, deleteUser, modifyUser, createAdmin };
