import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
import colors from "colors";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_DEV_URL);
    const conn = await mongoose.connect(process.env.MONGO_DEV_URL);
    console.log(
      `Connected to MongoDb Database: ${conn.connection.host}`.cyan.underline
        .bold
    );
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.red.underline.bold);
    // ? Ask rahul, why we are using process.exit(1) here
    // eslint-disable-next-line no-process-exit
    process.exit(1); // Here process.exit(1) means exit with failure and don't proceed further.
  }
};

export default connectDB;
