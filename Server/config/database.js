const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection established");
    })
    .catch((error) => {
      console.log("DB Connection failed: ", error);
      process.exit(1);
    });
};

module.exports = dbConnect;
