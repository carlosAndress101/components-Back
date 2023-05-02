import { config } from "dotenv";

config()

export const PORT = process.env.PORT
export const MONGO_URI = process.env.MONGO_URI