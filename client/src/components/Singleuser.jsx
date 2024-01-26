import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Singleuser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // Fetch the user data by ID
    axios
      .get(`http://localhost:3001/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  return (
    <div className="profile">
      <h2>User Details</h2>
      <div className="center">
        <div className=" left-pr">
          <p>Name: </p>
          <p>Email:</p>
          <p>Age:</p>
          <p>Phone:</p>
          <p>Address:</p>
        </div>

        <div className="right-pr">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
          <p> {user.phone}</p>
          <p>{user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Singleuser;
