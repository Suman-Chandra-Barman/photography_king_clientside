import React from "react";

const ReviewCard = ({ review }) => {
  const { name, image, message } = review;
  return (
    <div className="card card-compact bg-base-100 shadow-2xl text-center">
      <div className="avatar justify-center mt-10">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  text-center">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-body justify-center">
        <h2 className="card-title text-2xl font-bold justify-center">{name}</h2>
        <p className="text-base">{message}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
