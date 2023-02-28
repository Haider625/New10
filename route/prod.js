const express = require('express');
const router = express.Router();
const {getprod,insertprod,getOne,deleteone} =require('../logic/prod')

router.get('/',getprod)
router.get("/:id",getOne)
router.post('/',insertprod)
router.delete('/:id',deleteone)
module.exports = router;