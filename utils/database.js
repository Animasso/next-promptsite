import { mongoose } from "mongoose";
let isconnected = false; // track th econnection
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isconnected) {
    console.log("MongoDb is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shared_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isconnected = true;
  } catch (error) {
    console.log("error:", error);
  }
};
