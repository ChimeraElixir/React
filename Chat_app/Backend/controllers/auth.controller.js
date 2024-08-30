import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateWebToken.js"
import jwt from "jsonwebtoken"

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please provide username and password" })
    }

    const user = await User.findOne({ username })
    const isMatch = await bcrypt.compare(password, user.password)

    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid username or password" })
    }

    generateTokenAndSetCookie(user._id, res)

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    })
  } catch (error) {
    console.log("Error in Logout", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const Logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 })
    res.status(200).json({ message: "Logout successful" })
  } catch (error) {
    console.log("Error in Logout", error)
    res.status(500).json({ error: error.message })
  }
}

export const Signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" })
    }

    const user = await User.findOne({ username })

    if (user) {
      return res.status(400).json({ error: "User already exists" })
    }

    //hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boy = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girl = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boy : girl,
    })

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res)

      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        fullName: newUser.fullName,
        profilePic: newUser.profilePic,
      })
    }
  } catch (error) {
    console.log("Error in signup", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
