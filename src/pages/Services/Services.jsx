import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ServiceCart from "../Home/ServiceCart";

const Services = () => {
  const { setSpinner, loadingSpinner } = useContext(AuthContext);
  setSpinner(true);
  const data = useLoaderData();
  const services = data?.data;
  useTitle("Services");
  return (
    <>
      <div className="w-20 mx-auto">{loadingSpinner()}</div>
      <div className="md:grid grid-cols-3 gap-5 my-10">
        {services?.map((service) => (
          <ServiceCart key={service._id} service={service} />
        ))}
      </div>
      <div>{setSpinner(false)}</div>
    </>
  );
};

export default Services;
