import React, { useEffect } from "react";
import Slider from "./Slider";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
