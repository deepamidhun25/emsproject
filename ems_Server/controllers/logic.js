 const employees=require("../models/emsModel")
  employeeRegister = async (req,res)=>{

    const file=req.file.filename

    const {fname,lname,email,mobile,gender,status,location}=req.body
     if(!fname || !lname || !email || !mobile || !gender || !status || !location){
        res.status(404).json("all inputs are required")
     }
  
    
    // try {
        const preEmployee=await employees.findOne({email})
    if(preEmployee){
        res.status(403).json("employee already present")
    }
    else{
        //create objectr for new employee
        const newEmployee =new employees({fname,lname,email,mobile,gender,status,profile:file,location})
        await newEmployee.save()
        res.status(200).json(newEmployee)
    }
// }
// catch{
//     res.status(400).json("logic error")

// }
}

module.exports={employeeRegister}