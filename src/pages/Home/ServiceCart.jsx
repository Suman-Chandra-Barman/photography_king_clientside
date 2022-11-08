import React from "react";

const ServiceCart = ({ service }) => {
  console.log(service);
  const { name, price, _id, image, description } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-2xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-base">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-between items-center">
          <p className="text-xl font-semibold">Price : {price}</p>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
