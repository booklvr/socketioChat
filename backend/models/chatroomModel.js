import mongoose from 'mongoose'

const chatroomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

export default Chatroom
