import { Link } from "react-router-dom"
import {AppBar , Toolbar } from "@mui/material"
import "../GlobalCss/global.css"



const Navbar = () => {
  return (
    <>
  <AppBar>
  <Toolbar>

      <Link to={"/"} >Home</Link>
      <Link to={"/allusers"} >All Users</Link>
      <Link to={"/adduser"} >Register</Link>
      <Link to={"/login"} >Login</Link>
    
      </Toolbar>
      </AppBar>
    </>
  )
}




export default Navbar
