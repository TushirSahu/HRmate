const mongoose = require("mongoose");
const colors = require("colors");
const connection = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  console.log(`MongoDB has connected`.bgGreen.bold.white);
};

module.exports = connection;