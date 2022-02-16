import React from "react";

import "./settings.css"





function Settings() {
  return (

        <div className="settings">

    <div className="settingswrapper">
    <div className="settingstitle">
    <span className="settingsupdatetitle">LOOKS LIKE YOU NEED  UPDATE!</span>
    <span className="settingsdeletetitle">DELETE ACCOUNT</span>


    <form className="settingsform">

    <label></label>
    <div className="settingspp">
    <img src="xyz5.png" alt="" />
    <label for="fileinput"><i className="settingsppicon fa-solid fa-user"></i></label>
    <input type="file" id="fileinput" style={{display:"none"}}/>
    </div>

          <label>USERNAME</label>
      <input type="text" placeholder="Username"/>
    <label>EMAIL</label>
    <input type="email" placeholder="Email"/>
    <label>PASSWORD</label>
    <input type="password" placeholder="Password"/>
    <button type="submit"  className="settingsSubmit">Update</button>
    </form>



    </div>
    </div>

        </div>

  );
}

export default Settings;
