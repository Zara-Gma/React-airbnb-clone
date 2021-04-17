import React from "react";
import "./Home.css";
import Banner from "./Banner";

function Home() {
  return (
    <div className="home">
      <h1>Home Component</h1>
      <Banner />
      <div className="home_section"></div>
    </div>
  );
}

export default Home;
