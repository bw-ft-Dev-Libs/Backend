const Users = require('../../database/dbAccessFiles/users-model');
const Category = require('../../database/dbAccessFiles/category-model');
const DevLib = require('../../database/dbAccessFiles/devLib-model');

module.exports = {
  validateLib,
  validateDeleteLib,
}

async function validateLib(req, res, next){
  const libObj = req.body

  if(!libObj.lib || !libObj.user_id || !libObj.category_id){
    res.status(401).json({message: "Please send keys lib, user_id and category_id and give them values"})
  } else{

    // Check that the user and category exists
    let id = libObj.user_id;
    const user = await Users.findBy({id}).first()
    
    id = libObj.category_id;
    const category = await Category.findById({id}).first()

    if(!user){
      res.status(401).json({message: "Not a valid user"})
    } else if(!category){
      res.status(401).json({message: "Not a valid category"})
    } else{
      next();
    }
  }

}

function validateDeleteLib(req, res, next){
  const id = req.body.id;
  DevLib.findById(id)
  .then(devLib => {
    if(!devLib){
      res.status(401).json({message: "Not a valid DevLib"})
    } else {
      next();
    }
  })
  .catch(err => res.status(500).json({message: "The DB ran into a issue"}))
}