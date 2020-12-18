import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import moduleName from './data/products.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const created await User.insertMany(users);
    await Product.
  } catch (error) {}
}
