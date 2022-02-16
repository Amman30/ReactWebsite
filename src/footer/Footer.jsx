
import React from "react";
import "./footer.css";



const currentdate= new Date();
const currentYear=currentdate.getFullYear();




function Footer(){
  return(

<div>

    <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
    <div className="topLeft">
    <i className="topicon fa-brands fa-facebook"></i>
<i className="topicon fa-brands fa-instagram"></i>
<i className="topicon fa-brands fa-pinterest"></i>

     </div>
    <div class="container text-center">
<div className="copy">




      <small>Copyright &copy;{currentYear}</small>
</div>
    </div>
  </footer>
  </div>
  );

}

export default Footer;
