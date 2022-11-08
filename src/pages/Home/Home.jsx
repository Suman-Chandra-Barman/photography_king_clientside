import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";
import Slider from "./Slider";

const Home = () => {
  const [services, setServices] = useState();
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit]);

  return (
    <div>
      <Slider />
      <div className="md:grid grid-cols-3 gap-5 my-16">
        {services?.map((service) => (
          <ServiceCart key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
