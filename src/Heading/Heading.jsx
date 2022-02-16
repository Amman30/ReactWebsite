import React from "react";
import "./header.css";

const time = new Date().toLocaleString();





function Heading() {
  setInterval(gettime, 1000);
  const [count, setCount] = React.useState(time);

  function gettime() {
    const newtime = new Date().toLocaleString();
    setCount(newtime);









  }
  return (
    <div className="Header">

          <div className="header1">

          <span className="span1"><h1>{count}</h1></span>

          <span className="span2"> <h3>AMMAN</h3>



          </span>

<div className="akm">

          <iframe width="2000" height="1000"
          src="https://www.youtube.com/embed/gEOa793e_dU?autoplay=1&mute=1">
          </iframe>
</div>






          </div>








    </div>
  );
}

export default Heading;
