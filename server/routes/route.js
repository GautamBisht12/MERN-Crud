const express = require('express');
const route = express.Router();
const mymodal = require('../schema/userSchema');
const userData = require('../schema/userSchema');


route.get("/",(req,res)=>{
  res.send("this is crud api");
});

// MongoDB Database api 
route.get("/allusers", async(req,res)=>{
  const myalldata = await userData.find();
  res.json(myalldata)
  console.log(myalldata);
})


// register api 

route.post("/create" ,async (req,res)=>{

  const {name, email, phone , age , address} =req.body

  if (!name || !email || !phone || !age || !address ) {
  
      return res.status(400).json({ error: "Please fill out all fields properly" });
    }


const existingUser = await userData.findOne({ email });

if (existingUser) {

  return res.status(400).json({ error: "User with this email already exists" });
}


  const adduser = new userData({
      name,email,phone,age , address 
  });

  try {
      await adduser.save();
      console.log("Registration successful");
      return res.status(201).json({ success: "Registration successful" });
    } catch (error) {
      console.error("Error during registration:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

})



// update user api 

route.put('/update/:id' , async(req,res)=>{
try {
  const id = req.params.id;
  const {name , age , email ,phone , address} = req.body;

  const updateFields = {name , age , email ,phone , address};

  const updatedUser = await userData.findByIdAndUpdate(id , updateFields , {new: true} );

  res.json(updatedUser);
} catch (error) {
  console.log(error);
  res.status(500).json({error: "Server Error"})
}

})



// Delete user api 

route.delete('/deleteuser/:id' , async(req,res)=>{
try {
  const id = req.params.id
  const del = await userData.findByIdAndDelete(id)

  if (!del) {
    return res.status(404).json({ error: "User not found" });
  }

  console.log("User deleted:", del);
  res.status(200).json({ message: "User data deleted successfully" });
  
} catch (error) {
  console.log(error);
  res.status(500).json({error: "Server Error"})
}
})


// Single user data route
route.get('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userData.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});


module.exports = route
