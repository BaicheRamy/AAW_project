const mongoose = require("mongoose");



exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect('mongodb+srv://baicheramii:6waQBgLHuqtilcr0@cluster0.tyab0yk.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};