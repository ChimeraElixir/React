import express from "express"
import { Signup, Login, Logout } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/login", Login)

router.post("/logout", Logout)

router.post("/signup", Signup)

export default router
