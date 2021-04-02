const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const plantsRouter = require('./plants/plants-router')
const fileRouter = require('./services/file-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/api/users', fileRouter)
server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/plants', plantsRouter)

server.get('/', (req, res) => {
  res.send('<h1>welcome to Water my Plants!</h1>')
})

module.exports = server

 