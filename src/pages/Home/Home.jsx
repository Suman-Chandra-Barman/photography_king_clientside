import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AboutMe from "./AboutMe";
import PhotoGallery from "./PhotoGallery";
import ServiceCart from "./ServiceCart";
import Slider from "./Slider";

const Home = () => {
  const [services, setServices] = useState();
  const [totalService, setTotalService] = useState(0);
  useTitle("Home");

  useEffect(() => {
    fetch(
      `https://photography-king-server.vercel.app/service?total=${totalService}&limit=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setTotalService(data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [totalService]);

  return (
    <div>
      {/* this is Carousel part  */}
      <Slider />
      <div className="rounded-xl">
        <div className="md:grid grid-cols-3 gap-5 mt-16 mb-5">
          {services?.map((service) => (
            <ServiceCart key={service._id} service={service} />
          ))}
        </div>

        {/* services section  */}
        <div className="text-center ">
          <Link to="/services">
            <button className="btn px-20 btn-success text-white">
              See All Service
            </button>
          </Link>
        </div>
      </div>
      <div>
        {/* Photo Gallery section  */}
        <PhotoGallery />
      </div>
      <div>
        {/* About our service section  */}
        <AboutMe></AboutMe>
      </div>
    </div>
  );
};

export default Home;
