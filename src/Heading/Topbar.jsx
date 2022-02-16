import React from "react";

import "./topbar.css";



function Topbar() {
  return (
    <div className="top">
            <div className="topLeft">
      <i className="topicon fa-brands fa-react"></i>
          <i className="topicon fa-brands fa-blogger"></i>
          <i className="topicon fa-solid fa-circle-dollar-to-slot"></i>
             </div>




      <div className="topCenter">


      <ul className="toplist">
<li className="toplistsItem">HOME</li>
<li className="toplistsItem">ABOUT</li>
<li className="toplistsItem">CONTACT</li>
<li className="toplistsItem">WRITE</li>
<li className="toplistsItem">LOGOUT</li>


      </ul>

       </div>







        <div className="topRight">
<img src="xyz3.png" className="topimg" alt="" />
<i className="topsearch fa-solid fa-magnifying-glass"></i>
         </div>











    </div>
  );
}

export default Topbar;
