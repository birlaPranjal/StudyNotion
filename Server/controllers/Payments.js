const { default: mongoose } = require("mongoose");
const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");

exports.capturePayment = async (req, res) => {
  const { course_id } = req.body;
  const userId = req.user.id;

  if (!course_id) {
    return res.status(400).json({
      success: false,
      message: "please provide valid course id",
    });
  }
  let course;
  try {
    course = await Course.findById(course_id);
    if (!course) {
      return res.json({
        success: false,
        message: "could not find the course",
      });
    }

    const uid = new mongoose.Types.ObjectId(userId);
    if (course.studentEnrolled.includes(uid)) {
      return res.json({
        success: false,
        message: "Student is already enrolled",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  const amount = course.price;
  const currency = "INR";

  const option = {
    amount: amount * 100,
    currency,
    receipt: Math.random(date.now()).toString(),
    notes: {
      courseId: course_id,
      userId,
    },
  };
  try {
    const paymentResponse = await instance.orders.create(option);
    return res.status(200).json({
      success: true,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      thumbnail: course.thumbnail,
      orderId: paymentResponse._id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifySignature = async (req, res) => {
  const webHookSecret = "123456789";
  const signature = req.headers["x-razorpay-signature"];

  const shaSum = crypto.createHmac("sha256", webHookSecret);
  shaSum.update(JSON.stringify(req.body));
  const digest = shaSum.digest("hex");

  if (signature === digest) {
    const { courseId, userId } = req.body.payload.payment.entity.notes;
    try {
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        {
          $push: {
            studentEnrolled: userId,
          },
        },
        { next: true }
      );
      if (!enrolledCourse) {
        return res.status.json({
          success: false,
          message: "Course not found",
        });
      }

      const enrolledStudent = await Course.findOneAndUpdate(
        { _id: userId },
        {
          $push: {
            courses: courseId,
          },
        },
        { next: true }
      );

      const emailResponse = await mailSender(
        enrolledStudent.email,
        "Congratulation from Study-Notion",
        "Congratulation, you are enrolled into new course"
      );
      return res.status(200).json({
        success: true,
        message: "Signature verified and course added",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid Request",
    });
  }
};
