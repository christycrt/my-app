import "../App.css";

import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="Login">
        <Navbar />
      <div className="container">
        <div className="login-box">
          <h3>LOGIN</h3>
          <form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <input type="submit" value="LOGIN"/>
            <input type="submit" value="REGISTER"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
