import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

import connectToMongoDB from "./db/connectToMongoDB.js"

const app = express()
const PORT = process.env.PORT || 8000

dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server running on port ${PORT}`)
})
