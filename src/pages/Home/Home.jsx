import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCart from "./ServiceCart";
import Slider from "./Slider";

const Home = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/service?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Slider />
      <div className="md:grid grid-cols-3 gap-5 mt-16 mb-10">
        {services?.map((service) => (
          <ServiceCart key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="btn btn-primary">See All Service</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
