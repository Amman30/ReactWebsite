import React from "react";
import "./write.css"

const currentDate=new Date();
const daynumber= currentDate.getDay();
let day="";

if(daynumber===1)
day="MONDAY";
else if(daynumber===2)
day="TUESDAY";
else if(daynumber===3)
day="WEDNESDAY";
else if(daynumber===4)
day="THRUSDAY";
else if(daynumber===5)
day="FRIDAY";
else if(daynumber===6)
day="SATURDAY";
else
day="SUNDAY";



function Write() {
  return (
    <div className="write">
    <h1 className="dayy">IT'S {day}......</h1><br />
    <h2 className="dayy">WRITE SOMETHING ABOUT ME DOWN</h2>
    <br />
    <img className="writeimage" src="xyz1.png" alt="" />
<form className="writeform" >
<div className="writeformGroup">
<label htmlFor="fileinput">
<i className="writeIcon fa-duotone fa-plus"></i>
</label>

<input type="file" id="fileinput" style={{display:"none"}}/>
<input className="writeinput" type="text" placeholder="Title" autoFocus={true}/>
</div>
<div className="writeformGroup">

<textarea placeholder="Anything About ME" className="writeinput writetext"  type="text" name="name" rows="8" cols="80"></textarea>

<button className="writesubmit" type="submit" name="button">PUBLISH</button>


</div>
</form>

    </div>
  );
}

export default Write;
