const express=require("express")
const app= express()
app.use('/abc',(req,res)=>{
  res.send({a:1,b:2})
})
app.listen("40000",()=>{
  console.log('启动了');
})