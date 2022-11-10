import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCart = ({ service }) => {
  const { name, price, _id, image, description } = service;
  return (
    <div className="card card-compact bg-base-100 border shadow-lg mb-5 md:mb-0">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="Shoes" className="h-56 w-full" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-base">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-between items-center">
          <p className="text-xl font-semibold">Price : ${price}</p>
          <Link to={`/services/${_id}`}>
            <button className="btn btn-outline btn-success">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
