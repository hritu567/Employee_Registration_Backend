const router = require('express').Router();
const employeeController = require('../controller/EmployeeController');
const userController = require("../controller/usercontroler");
router.post('/user/registration',userController.userRegistrationcontroller);
router.post('/user/login',userController.userLoginController);
router.post('/employee/create', employeeController.employeeRegistrationcontroller);
router.get('/employee/read',employeeController.employeeReadcontroller);
router.put('/employee/update/:id',employeeController.employeeUpdatecontroller);
router.delete('/employee/delete/:id',employeeController.employeeDeletecontroller);
module.exports=router;


