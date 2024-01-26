
import './App.css'
import Adduser from './components/Adduser'
import Allusers from './components/Allusers'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import Singleuser from './components/Singleuser'
import Update from './components/Update'

function App() {
  

  return (
    <>
    <Router>
<Navbar/>
<Routes>

     <Route path='/' element={<Home/>} >Home</Route>
     <Route path='/allusers' element={<Allusers/>} >Home</Route>
     <Route path='/adduser' element={<Adduser/>} >Adduser</Route>
     <Route path='/login' element={<Login/>} >Login</Route>
     <Route path='/user/:id' element={<Singleuser/>} >Profile</Route>
     <Route path='/update/:id' element={<Update/>} >Update</Route>
</Routes>
    
    </Router>
      
    </>
  )
}

export default App
