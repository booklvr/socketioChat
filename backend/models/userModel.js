<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
<<<<<<< HEAD
);

const User = mongoose.model('User', userSchema);

export default User;
=======
)

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model('User', userSchema)

export default User
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
