
import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MongoDB connection URI is not defined');
    }
    await mongoose.connect(mongoUri, { dbName: "Project0", useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to database!");
  } catch (err) {
    console.error("Some error occurred while connecting to database:", err.message);
  }
};
