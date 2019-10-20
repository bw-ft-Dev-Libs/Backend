const router = require('express').Router();
const libValidation = require('../middleware/devLib-middlware');

router.get('/', (req, res) => {
  res.status(200).json({message: "hitting the devLib GET route"})
})

router.post('/', libValidation.validateLib, (req, res) => {
  res.status(200).json({message: "hitting the devLib POST route"})
})

router.put('/', libValidation.validateLib, (req, res) => {
  res.status(200).json({message: "hitting the devLib PUT route"})
})

router.delete('/', libValidation.validateDeleteLib, (req, res) =>{
  res.status(200).json({message: "hitting the devLib DELETE route"})
})

module.exports = router;