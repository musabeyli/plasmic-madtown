//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR TODO SCHEMA
  const UserSchema = new mongoose.Schema({
    name: String,
    email: Boolean,
  })

  // OUR TODO MODEL
  const User = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

  return { conn, User }
}
