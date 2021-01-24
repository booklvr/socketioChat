import asyncHandler from 'express-async-handler'
import Chatroom from '../models/chatroomModel.js'

// @desc    Register a new chatroom
// @route   Post  /api/chatroom
// @access  Private
export const registerChatroom = asyncHandler(async (req, res) => {
  const { name } = req.body

  const chatroomExists = await Chatroom.findOne({ name })

  if (chatroomExists) {
    res.status(400)
    throw new Error('Chatroom already exists')
  } else {
    const chatroom = await Chatroom.create({
      name,
      user: req.user._id,
    })

    if (chatroom) {
      res.status(201).json(chatroom)
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  }
})

export const listChatrooms = asyncHandler(async (req, res) => {
  const chatrooms = await Chatroom.find()

  if (chatrooms) {
    res.status(200).json({ chatrooms })
  } else {
    res.status(400)
    throw new Error('No Classrooms found')
  }
})

export const getChatroom = asyncHandler(async (req, res) => {
  const chatroom = await Chatroom.findById(req.params.id)

  if (chatroom) {
    res.status(200).json({ chatroom })
  } else {
    res.status(400)
    throw new Error('No Classrooms found')
  }
})

export const deleteChatroom = asyncHandler(async (req, res) => {
  const chatroom = await Chatroom.findById(req.params.id)

  if (chatroom) {
    if (chatroom.user.toString() === req.user._id.toString()) {
      await chatroom.remove()
      console.log('chatroom removed')
      res.json({ message: 'Chatroom removed ' })
    } else {
      res.status(400)
      throw new Error('You do not have permission to do this')
    }
  } else {
    res.status(400)
    throw new Error('Chatroom not found')
  }
})
