import { Link } from "react-router-dom"
import "../GlobalCss/global.css"

const Home = () => {
  return (
    <>
    <div className="main-home">

      <h1>This is a CRUD application </h1>
      <h1>using redux</h1>
      <Link to={"/adduser"}>Register</Link>
      
      </div>
    </>
  )
}

export default Home
