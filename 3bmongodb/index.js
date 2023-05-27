const dbConnect=require('./mongodb')
const express=require('express');
const app=express();
app.use(express.json)
//get api
app.get('/getdata',async(req,res)=>{
let result=await dbConnect();
result=await result.find().toArray();
res.send(result);
})

//post api
app.post('/insertData',async(req,res)=>{
    let result=await dbConnect();
    result=await result.insertOne(req.body);
    res.send("data inserted ")
})
//put api
app.put('/updateData/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body}); 
    res.send("Data Updated Successfully")
    })
    //Delete API
app.delete('/deleteData/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name}) 
    res.send("Data Deleted Successfully");
    })
app.listen(3000);
