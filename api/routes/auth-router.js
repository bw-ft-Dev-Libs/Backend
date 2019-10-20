const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');
const Users = require('../../database/dbAccessFiles/users-model');
const validation = require('../middleware/auth-middleware');

router.post('/register', validation.checkForUser ,(req, res) => {
  
  const reqUser = req.body;

  if(!reqUser.username || !reqUser.password){
    res.status(401).json({message: "Please provide a username and a password"})
  } else {

    const newUser = {...reqUser, password: bcrypt.hashSync(reqUser.password)}

    // Insert the new user into the DB
    Users.createUser(newUser)
    .then(data => {
      if(data){
        res.status(201).json({username: data.username, userId: data.userId})
      }
    })
    .catch(err => {
        res.status(500).json({message: "The database was unable to create the user", message: err.message})
      
    })
  }
  
})

router.post('/login', (req, res) => {
  const {username, password} = req.body;

    // find a user
    Users.findBy({ username })
      .first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){ //check the password provided
          const token = generateToken(user) //generate a token for the user
          
          res.status(200)
            .json({
              user: user.id,
              username: user.username,
              token: token
            })

        } else {
          res.status(401).json({message: "You have provided insuficent credentials"})
        }
      })
      .catch(err => res.status(500).json({message: "The DB ran into an issue", err: err.message}))
})


// Genreate JWT
function generateToken(user){
  
  const payload = {
    subject: user.id,
    username: user.username,
  }
  
  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(payload, secret.jwtSecret, options)
}

module.exports = router;