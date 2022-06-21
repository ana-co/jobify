import express from "express";

const router = express.Router()

import { login, register, updateUser } from "../controllers/authController.js";
import authenticateUser from '../middleware/auth.js'

import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

router.route('/register').post(limiter, register)
router.route('/login').post(limiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router