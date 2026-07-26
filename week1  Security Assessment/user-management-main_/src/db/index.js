import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    console.log("❌ MONGODB_URI is not defined");
    process.exit(1); // IMPORTANT
  }

  if (isConnected) {
    console.log("=> mongoDB using existing connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log("=> mongoDB connected");
  } catch (err) {
    console.log("❌ MongoDB connection failed:");
    console.log(err);
    process.exit(1); // IMPORTANT
  }
};