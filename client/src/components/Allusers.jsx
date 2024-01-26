import { Link } from "react-router-dom";
import { AiOutlineEye, AiFillDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiPen } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";
import { deleteUser } from "../redux/userSlice";

const Allusers = () => {
  const dispatch = useDispatch();


const handleDelete = async(id) => {
  try {
    await axios.delete(`http://localhost:3001/deleteuser/${id}`);
    dispatch(deleteUser({ _id: id }));
    console.log(`User with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
  }

}


  const users = useSelector((state) => state.users.users);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:3001/allusers").then((response) => {
          const data = response.data;
          console.log(data);
          dispatch(getUser(data));
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="alluser-main">
      <div className="top">
     <h1>CRUD </h1> 
     <h2>Application </h2>
     </div>
      <Link to={"/adduser"}  className="add">             
        <h4> Add User</h4>
      </Link>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age} </td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/update/${user.id}`} className="edit">
                      <BiPen size={25} />
                      Update
                    </Link>
                    <Link  className="del" onClick={()=>handleDelete(user.id)}>
                      <AiFillDelete size={25} />
                      Delete
                    </Link>
                    <Link to={`/user/${user.id}`}  className="view">
                      <AiOutlineEye color="black" size={25}  />
                      View
                    </Link>
                  
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Allusers;
