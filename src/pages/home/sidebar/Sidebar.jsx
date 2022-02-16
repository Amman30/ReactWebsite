import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (

    <div className="sidebar">
<div className="sidebarItem">
<span className="sidebarTitle"><em>ABOUT ME</em></span>
<img className="hulkimg" src="xyz5.png" alt="hulk" />
<p className="ptext">Lorem ipsum dolor sit amet,t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
 anim id est laborum. consectetur adipisicing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
  n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli
  t anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod te
  mpor incididunt ut labore et dolore magna aliqua.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>



</div>
<div className="sidebarItem">
<span className="sidebarTitle">CATEGORIES</span>
<ul className="sidebarlists">
<li className="sidebarlistsitem">Life</li>
<li className="sidebarlistsitem">Sport</li>
<li className="sidebarlistsitem">Music</li>
<li className="sidebarlistsitem">Technology</li>
<li className="sidebarlistsitem">Tv Shows</li>
</ul>
</div>
<div className="sidebarItem">
<span className="sidebarTitle">Follow Me </span>
<div className="sidebarSocial">
<i className="sidebarSocialicon fa-brands fa-facebook"></i>
<i className="sidebarSocialicon fa-brands fa-twitter"></i>
<i className="sidebarSocialicon fa-instagram"></i>
</div>
</div>
    </div>
  );
}

export default Sidebar;
