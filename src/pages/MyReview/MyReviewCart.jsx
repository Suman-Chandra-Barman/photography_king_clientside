import React from "react";
import { Link } from "react-router-dom";

const MyReviewCard = ({ review, handleReviewDelete }) => {
  const { name, message, _id } = review;
  return (
    <div className="card bg-slate-300 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
          <Link>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button
            onClick={() => handleReviewDelete(_id)}
            className="btn btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
