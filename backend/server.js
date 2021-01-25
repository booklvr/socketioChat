import path from 'path'
import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import chatroomRoutes from './routes/chatroomRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
const server = http.Server(app)
const io = new Server(server)
// const server = http.createServer(app)
// io(server)
// setup socket io
// const app = require('express')
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)

dotenv.config()

connectDB()

// middleware to log routes
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/chatrooms', chatroomRoutes)

// dirname doesn't work normally with es6 syntax (require) so use below workaround
// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('* ', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
