//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URI } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URI as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR User SCHEMA
  const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
  })

  // OUR User MODEL
  const User = mongoose.models.User || mongoose.model("User", UserSchema)

  return { conn, User }
}
