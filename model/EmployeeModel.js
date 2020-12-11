const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema(
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
       mobile:{
           type:Number,
           required:true,
           minlength:10,
           maxlength:10
       }
    }
);
const employees = mongoose.model('employees', employeeSchema);
class EmployeeModel{
    employeeRegistration(req,next){
        try{
        return new Promise((resolve,reject)=>{
            employees.create(req).then((result)=>{
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
  readEmployeeRecord(req,next)
  {
    try{
        return new Promise((resolve,reject)=>{
            employees.find().then((result)=>{
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
  updateEmployeeRecord(req,next)
  {  
    try{  
        return new Promise((resolve,reject)=>{
            employees.findByIdAndUpdate(req.params.id,req.body).then((result)=>{
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
  deleteEmployeeRecord(req,next)
  {  
    try{  
        return new Promise((resolve,reject)=>{
            employees.findByIdAndRemove(req).then((result)=>{
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
}
module.exports=new EmployeeModel();

