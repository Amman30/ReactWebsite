import React from "react";
import "./home.css";
import Posts from "./posts/Posts.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";





function Home() {
  return (
    <div className="home">
    <Posts />
    <Sidebar />

    </div>
  );
}

export default Home;
