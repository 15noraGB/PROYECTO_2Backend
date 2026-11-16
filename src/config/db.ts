import mongoose from 'mongoose';

const uri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/app';

export async function connectDb(): Promise<void> {
  await mongoose.connect(uri);
  console.log('MongoDB conectado');
}