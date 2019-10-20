// Basic middleware
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// Route handlers
const authRouter = require('./routes/auth-router')

// Server
const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/auth', authRouter)

module.exports = server;