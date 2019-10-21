const Users = require('../../database/dbAccessFiles/users-model');
const Category = require('../../database/dbAccessFiles/category-model');
const DevLib = require('../../database/dbAccessFiles/devLib-model');

module.exports = {
  validateLibPost,
  validateLibPut,
  validateDeleteLib,
  validateUserOnRecord,
}

async function validateLibPost(req, res, next){
  const libObj = req.body

  if(!libObj.lib || !libObj.user_id || !libObj.category_id){
    res.status(401).json({message: "Please send keys lib, user_id and category_id and give them values"})
  } else{

    // Check that the user and category exists
    try{

      let id = libObj.user_id;
      const user = await Users.findById(id)

      id = libObj.category_id;
      const category = await Category.findById(id)

      if(!user){
        res.status(401).json({message: "Not a valid user"})
      } else if(!category){
        res.status(401).json({message: "Not a valid category"})
      }else{
        next();
      }

    } catch(err) {
      console.log(err.message)
    }
    
  }

}

async function validateLibPut(req, res, next){
  const libObj = req.body

  if(!libObj.lib || !libObj.user_id || !libObj.category_id || !libObj.id){
    res.status(401).json({message: "Please send keys id, lib, user_id and category_id and give them values"})
  } else{

    try{

      let id = libObj.user_id;
      const user = await Users.findById(id)
      console.log(user)

      id = libObj.category_id;
      const category = await Category.findById(id)
    
      id = libObj.id
      const devLib = await DevLib.findById(id)
      console.log(devLib)
      
      if(!user){
        res.status(401).json({message: "Not a valid user"})
      } else if(!category){
        res.status(401).json({message: "Not a valid category"})
      } else if(!devLib){
        res.status(401).json({message: "Not a valid DevLib"})
      }else{
        next();
      }

    } catch(err) {
      console.log(err.message)
    }
    
  }

}

function validateUserOnRecord(req, res, next){
  const user = req.body.user_id;
  const id = req.body.id;
  
  DevLib.findById(id)
  .then(devLib => {
    if(devLib.user_id === user){
      next();
    } else {
      res.status(403).json({message: "You do not have access to edit this record"})
    }
  })
  .catch(err => console.log(err.message))
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



