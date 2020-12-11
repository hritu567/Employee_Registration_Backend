const employeeServiceController = require("../service/EmployeeService")
const response={};
class EmployeeController{
   
    employeeRegistrationcontroller(req,res){
        console.log(req.body);
        employeeServiceController.employeeRegistrationService(req.body).then(result=>{
                 response.success=true;
                 response.message=result.message;
                 response.data=result.data;
                 return res.status(200).send(response);
        }).catch(err=>{
           response.success=false;
           response.message=err.message;
           response.data=err.error;
           return res.status(400).send(response);
        })
   
       }
       employeeReadcontroller(req,res){
        
       employeeServiceController.employeeReadService().then(result=>{
                 response.success=true;
                 response.message=result.message;
                 response.data=result.data;
                 return res.status(200).send(response);
        }).catch(err=>{
           response.success=false;
           response.message=err.message;
           response.data=err.error;
           return res.status(400).send(response);
        })
   
       }
       employeeUpdatecontroller(req,res){
        console.log(req.body);
        employeeServiceController.employeeUpdateService(req).then(result=>{
                 response.success=true;
                 response.message=result.message;
                 response.data=result.data;
                 return res.status(200).send(response);
        }).catch(err=>{
           response.success=false;
           response.message=err.message;
           response.data=err.error;
           return res.status(400).send(response);
        })
   
       }
       employeeDeletecontroller(req,res){
         console.log(req.params);
         employeeServiceController.employeedeleteService(req.params.id).then(result=>{
                  response.success=true;
                  response.message=result.message;
                  response.data=result.data;
                  return res.status(200).send(response);
         }).catch(err=>{
            response.success=false;
            response.message=err.message;
            response.data=err.error;
            return res.status(400).send(response);
         })
    
        }
}
module.exports = new EmployeeController();