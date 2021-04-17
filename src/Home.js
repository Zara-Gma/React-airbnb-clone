import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <h1>Home Component</h1>
      <Banner />
      <div className="home_section">
        <Card
          src="https://bit.ly/3gjx191"
          title="Penthouse in Florida"
          description="Superhost with great amenities and a fabolous shopping complex nearby."
        />
        <Card
          src="https://bit.ly/32nH3Os"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://bit.ly/3twx1GE"
          title="3 Bedroom Flat in California"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://bit.ly/3e4wQMg"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          pri
        />
      </div>
    </div>
  );
}

export default Home;
