const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/employeeManagementSystem", { useNewUrlParser: true }).then(()=>{
console.log("successfully connected");
}).catch(()=>{
console.log("Failed");
});