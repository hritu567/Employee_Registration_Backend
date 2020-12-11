const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {   
        firstName :{
             type:String,
             required:true
        },
        lastName:{
             type:String,
             required:true
        },
        email : {
            type:String,
            required:true,
            unique:true
        },
       password :{
            type:String,
            required : true
       },
       mobile:{
           type:Number,
           required:true,
           minlength:10,
           maxlength:10
       }
    }
);
const users = mongoose.model('user' , userSchema);

class UserModel{
    userRegistration(req,next){
        try{
        return new Promise((resolve,reject)=>{
            users.create(req).then((result)=>{
                    resolve(result);
                }
            ).catch((err)=>{
                reject(err);
            })
        })
    }catch(err){
        next(err);
    }
}
userLogin(req,next){
    try{
     
    return new Promise((resolve,reject)=>{
        users.findOne(req.find).then(result=>{
           if(req.password==result.password){
            resolve(result);
           }else
           {
               reject({message:"password doesn't matched"});
           }
        }).catch(err=>{
            reject(err);
        })
    })
}catch(err)
{
    next(err);
}
}
}
module.exports= new UserModel();