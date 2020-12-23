import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc    Auth user & get token
// @route   Post  /api/users/login
// @access  Public
router.post('/login', authUser)

router.route('/profile').get(protect, getUserProfile)

router.route('/').post(registerUser)

export default router