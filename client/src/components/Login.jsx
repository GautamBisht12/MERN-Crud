import { Link } from "react-router-dom";
import "../GlobalCss/global.css";

const Login = () => {
  return (
    <>
      <div className="main login">
        <h1>Log In</h1>
        <div className="form-center login-center">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />

            <div className="login-btn">
              <Link className="adduser-btn log-btn" to={"/"}>
                Login
              </Link>
              <Link className="adduser-btn reg-btn" to={"/adduser"}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
