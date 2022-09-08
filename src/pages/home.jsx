import React from "react";
import CustomCarousel from "../components/carousel/carousel";

const poze = ["poze4.jpg", "poze7.jpg", "poze8.jpg", "poze15.jpg"];

const Home = () => {
  return (
    <div>
      <div  style={{ maxWidth: "18rem" }}><CustomCarousel/></div>
      <div className="text">
        Everything is for you!
      </div>
    </div>
  );
};

export default Home;

/* <div className="home-galelery">
        {poze.map((image) => (
          <img src={`images/${image}`} alt="..." className="home-image" width={320}/>
        ))}
      </div> */
