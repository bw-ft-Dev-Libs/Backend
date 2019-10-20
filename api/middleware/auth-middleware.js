const Users = require('../../database/dbAccessFiles/users-model')

module.exports =  {
  checkForUser
}

function checkForUser(req, res, next) {
  const username = req.body.username
  Users.findBy({username})
  .first()
  .then(user => {
    if(!user){
      next();
    } else{
      res.status(401).json({message: "This user already exists"});
    } 
  })
}