const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://gks3112003:q8iSYqydXDj7aGHn@cluster0.kmbe1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;