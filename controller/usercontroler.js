const serviceController = require("../service/service");
const response={};
class Usercontroller{
    userRegistrationcontroller(req,res){
     console.log(req.body);
     serviceController.userRegistrationService(req.body).then(result=>{
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
    userLoginController(req,res){
        console.log(req.body);
        serviceController.userLoginService(req.body).then(result=>{
                 response.success=true;
                 response.message=result.message;
                 response.data=result.data;
                 return res.status(200).send(response);
        }).catch(err=>{
           response.success=false;
           response.message=err.message;
           response.data=err.error;
           return res.status(404).send(response);
        })
   
       }
   

}
module.exports=new Usercontroller();
