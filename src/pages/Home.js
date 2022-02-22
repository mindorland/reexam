import React from "react";
import campfireImage from '../img/campfire.jpg'
import hikingImage from '../img/hiking.jpg'

function Home() {
  return (
    <div className="home">
        <h1>AsoPlan</h1> 
        <h3>We are here to arrage annual excursions with you. :) </h3>
        <img
          alt=""
          style={{ width: "400px" }}
          margin={{bottom:"10px"}}
          src={campfireImage}
        />
                <img
          alt=""
          style={{ maxWidth: "400px" }}
          src={hikingImage}
        />
    </div>
  )
}

export default Home;
