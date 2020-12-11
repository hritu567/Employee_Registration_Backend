const userModel = require("../model/model");
class userService{
    userRegistrationService(req,next){
        try{
             return userModel.userRegistration(req).then(result=>{
                 return ({message : "Data added", data: result})
             }).catch(err=>{
                  return ({message : "Failed", error: err});
             });
        }catch(error){
          next(error);
        }
    }
    userLoginService(req,next){
        try{
            let userDetails={
                find:{email:req.email},
                password:req.password
            }
             return userModel.userLogin(userDetails).then(result=>{
                 return ({message : "Data found", data: result})
             }).catch(err=>{
                  return ({message : "Failed", error: err});
             });
        }catch(error){
          next(error);
        }
    }
}
module.exports = new userService();