import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser , updateUser} from "../redux/userSlice";
import { useState, useEffect } from "react";



const Update = () => {
  
  const {id}= useParams()
const users = useSelector( state =>state.users.users)
const User = users.find(u => u.id === id)
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
  });

  // Use useEffect to populate the form fields when User changes
  useEffect(() => {
    if (User) {
      setUser({
        name: User.name,
        email: User.email,
        phone: User.phone,
        age: User.age,
        address: User.address,
      });
    }
  }, [User]);

  const dispatch = useDispatch()
  
  const userInput = (e)=>{
    
    console.log(e.target.name,e.target.value);
    const name = e.target.name
    const value = e.target.value
  
    setUser({...user , [name]:value})
    console.log(user );
  }
  
  const handleUpdate = async() =>{
    const {name , email , phone ,age , address} = user;
    
    if(name ==="" || email==="" || phone==="" ||age==="" || address===""){
      alert("Fill form properly")
    }
    else{
     const res = await fetch(`http://localhost:3001/update/${id}`,{
      method:"PUT",
      // mode:"no-cors",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
      name,email,phone,age,address
      })
     })
     const data = await res.json();
     console.log(data);
     dispatch(updateUser({ id,name,email,phone,age,address}))
  } 
  }
console.log(user);
  return (
    <>
        <div className="main">
        <h1>Update</h1>
        <div className="form-center">
          <form action="">
            <input type="text" name="name" value={user.name} onChange={(e)=> userInput(e)}   placeholder="Name" />
            <input type="text" name="email" value={user.email}  onChange={(e)=> userInput(e)}   placeholder="Email" />
            <input type="number" name="age" value={user.age} onChange={(e)=> userInput(e)}   placeholder="Age" />
            <input type="number" name="phone" value={user.phone} onChange={(e)=> userInput(e)}   placeholder="Phone" />
            <input type="text" name="address" value={user.address} onChange={(e)=> userInput(e)}   placeholder="Address" />

            <Link className="adduser-btn" to={"/allusers"} onClick={()=> handleUpdate()}>
              Update
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Update
