import express from 'express'
import {
  registerChatroom,
  listChatrooms,
  deleteChatroom,
  getChatroom,
} from '../controllers/chatroomController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, registerChatroom).get(protect, listChatrooms)

router.route('/:id').delete(protect, deleteChatroom).get(protect, getChatroom)

export default router
