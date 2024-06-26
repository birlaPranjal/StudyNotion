const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_Secret);
      req.user = decode;
    } catch (error) {
      console.error(error);
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for student only",
      });
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified",
    });
  }
};
exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Instructor only",
      });
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified",
    });
  }
};
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Admin only",
      });
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified",
    });
  }
};
