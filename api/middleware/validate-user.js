const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
 
  if (token){
    // check the token is valid
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      
      req.user_id = decodedToken.subject

      if(err){
        // foul play
        res.status(401).json({message: "YOU SHALL NOT PASS!"})
      } else {
        // Token is gooooooooooood
        next();
      }

    })
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};