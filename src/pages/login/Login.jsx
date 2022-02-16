import React from "react";

import "./login.css";


function Login() {
  return (
    <div className="login">
    <span className="loginTitle">LOGIN</span>
<form className="loginForm">
<label>Email</label>
<input type="email" className="loginInput" placeholder="ENTER YOUR EMAIL" />
<label>Password</label>
<input type="Password" className="loginInput" placeholder="ENTER YOUR Password" />
<button type="submit" className="loginbutton">LOGIN</button>
</form>
<button type="submit" className="registerbutton">REGISTER</button>
</div>
  );
}

export default Login;
