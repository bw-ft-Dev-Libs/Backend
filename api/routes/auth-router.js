const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

router.post('/register', (req, res) => {
  res.status(200).json({message: "Hit the register route in AUTH"})
})

router.post('/login', (req, res) => {
  res.status(200).json({message: "Hit the login route in AUTH"})
})

module.exports = router;