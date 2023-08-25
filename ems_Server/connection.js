
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true ,
    useUnifiedTopology:true}).then(()=>{
        console.log("----mongodbAtlas Connection successfully------");   
     }).catch(()=>{
        console.log(".........mongodb connection error..........");
     })
