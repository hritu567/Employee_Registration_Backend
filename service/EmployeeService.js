const employeeModel=require('../model/EmployeeModel')
class EmployeeService{
    employeeRegistrationService(req,next){
        try{
             return employeeModel.employeeRegistration(req).then(result=>{
                 return ({message : "Data added", data: result})
             }).catch(err=>{
                  return ({message : "Failed", error: err});
             });
        }catch(error){
          next(error);
        }
    }
    employeeReadService(req,next){
        try{
             return employeeModel.readEmployeeRecord().then(result=>{
                 return ({message : "Data found", data: result})
             }).catch(err=>{
                  return ({message : "Failed", error: err});
             });
        }catch(error){
          next(error);
        }
    }
    employeeUpdateService(req,next){
        try{
             return employeeModel.updateEmployeeRecord(req).then(result=>{
                 return ({message : "Data Updated", data: result})
             }).catch(err=>{
                  return ({message : "Failed to update", error: err});
             });
        }catch(error){
          next(error);
        }
    }
    employeedeleteService(req,next){
        try{
             return employeeModel.deleteEmployeeRecord(req).then(result=>{
                 return ({message : "Data Deleted", data: result})
             }).catch(err=>{
                  return ({message : "Failed to delete", error: err});
             });
        }catch(error){
          next(error);
        }
    }
}
module.exports=new EmployeeService();