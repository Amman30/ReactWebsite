import React from "react";

import "./register.css";


function Register() {
  return (
    <div className="register">
    <span className="registerTitle">REGISTER</span>
<form className="registerForm">
<label>FULL NAME</label>
<input type="name" className="registerInput" placeholder="ENTER FULLNAME" />
<label>User Name</label>
<input type="name" className="registerInput" placeholder="CHOOSE USERNAME" />

<label>Email</label>
<input type="email" className="registerInput" placeholder="ENTER EMAIL" />
<label>Password</label>
<input type="Password" className="registerInput" placeholder="ENTER Password" />
<label>Confirm Password</label>
<input type="Password" className="registerInput" placeholder="Re-Enter Password" />
<button type="submit" className="registerbutton">LOGIN</button>
</form>
<button type="submit" className="loginbutton">REGISTER</button>

<div className="topicon">
<p>SIGN UP USING</p>
<i className="topicon fa-brands fa-facebook"></i>
<i className="topicon fa-brands fa-twitter"></i>
<i className="topicon fa-brands fa-instagram"></i>
</div>
</div>
  );
}

export default Register;
