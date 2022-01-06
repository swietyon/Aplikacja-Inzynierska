const User=require('./../models/User'); 
 
 
const getUsers=(req,res)=>{ 
 
 User.find() 
 .then(result=>{ 
 console.log('result: ',result) 
 res.send(result.length>0?result:'No Users'); 
 }) 
 .catch(err=>{ 
 console.log(err); 
 }) 
} 
 
module.exports={ 
 getUsers 
} 