import { Link } from "react-router-dom";
import "../GlobalCss/global.css";
import { useState } from "react";
import axios from "axios"
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Adduser = () => {
const dispatch = useDispatch()

  const defaultValue ={
    name:"",
    email:"",
    age:"",
    phone:"",
    address:""
  }

  const [user , setUser] = useState(defaultValue)

const userInput = (e)=>{
  
  console.log(e.target.name,e.target.value);
  const name = e.target.name
  const value = e.target.value

  setUser({...user , [name]:value})
  console.log(user );
}

const adUserDetails = async() =>{
  const {name , email , phone ,age , address} = user;
  
  if(name ==="" || email==="" || phone==="" ||age==="" || address===""){
    alert("Fill form properly")
  }
  else{
   const res = await fetch("http://localhost:3001/create",{
    method:"POST",
    // mode:"no-cors",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
    name,email,phone,age,address
    })
   })
   const data = await res.json();
   console.log(data);
   dispatch(addUser(data))
   alert("User Added ")
} 
}

  return (
    <>
      <div className="main">
        <h1>Add User</h1>
        <div className="form-center">
          <form action="">
            <input type="text" name="name"  onChange={(e)=> userInput(e)}   placeholder="Name" />
            <input type="text" name="email"  onChange={(e)=> userInput(e)}   placeholder="Email" />
            <input type="number" name="age"  onChange={(e)=> userInput(e)}   placeholder="Age" />
            <input type="number" name="phone"  onChange={(e)=> userInput(e)}   placeholder="Phone" />
            <input type="text" name="address"  onChange={(e)=> userInput(e)}   placeholder="Address" />

            <Link className="adduser-btn" to={"/allusers"} onClick={()=> adUserDetails()}>
              Add
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adduser;
