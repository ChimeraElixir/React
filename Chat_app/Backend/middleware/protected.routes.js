import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectedRoute = async (req, res, next) => {
  try {
    // Extract the JWT token from the request cookies
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - no token" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - invalid token" })
    }

    const user = await User.findById(decoded.userId).select("-password")

    if (!user) {
      return res.status(401).json({ error: "No such user" })
    }

    req.user = user

    next()
  } catch (error) {
    console.log("Error in protected route", error.message)
    res.status(400).json({ error: error.message })
  }
}

export default protectedRoute
