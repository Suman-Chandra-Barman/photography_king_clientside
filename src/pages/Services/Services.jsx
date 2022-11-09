import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCart from "../Home/ServiceCart";

const Services = () => {
  const data = useLoaderData();
  const services = data?.data;
  return (
    <div className="md:grid grid-cols-3 gap-5 mt-16 mb-10">
      {services?.map((service) => (
        <ServiceCart key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
