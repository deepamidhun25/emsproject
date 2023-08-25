//set path for each requests

const express=require('express')

const  upload  = require('../multerconfig/storageConf')

const { employeeRegister } = require('../controllers/logic')


// careate an object for router class in express
const router=new express.Router()

//register employee -post
router.post('/employees/register',upload.single('user_profile'),employeeRegister)

//get all employees
router.get('/empoyees/getEmployees')

module.exports=router