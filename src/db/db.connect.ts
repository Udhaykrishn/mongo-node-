import mongoose, { ConnectOptions } from "mongoose";

// During development time use the local MongoDB instance:
// const MONGODB_URI = "mongodb://localhost:27017/";

// During Dockerization time use the MongoDB container name:
const MONGODB_URI = "mongodb://mongo_db:27017/";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Connected to MongoDB Cloud");
  } catch (error: any) {
    console.log("Connection error:", error.message);
  }
};

export default connectDB;
