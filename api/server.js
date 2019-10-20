// Basic middleware
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
// Custom Middleware
const validateUser = require('./middleware/validate-user');

// Route handlers
const authRouter = require('./routes/auth-router');
const devLibRouter = require('./routes/devLib-router');

// Server
const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/devLib', validateUser, devLibRouter)

module.exports = server;