import express from 'express'
import { authUser } from '../controllers/userController.js'

const router = express.Router()

// @desc    Auth user & get token
// @route   Post  /api/users/login
// @access  Public
router.post('/login', authUser)

export default router
