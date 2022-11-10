import React from "react";

const MyReviewCard = ({ review, handleReviewDelete, setUpdate }) => {
  const { name, message, _id } = review;

  const handleUpdateReview = (e) => {
    e.preventDefault();
    const updateMessage = e.target.updateMessage.value;
    console.log(updateMessage);
    fetch(`https://photography-king-server.vercel.app/my-review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateMessage }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          e.target.reset();
          setUpdate(1);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="card bg-slate-300 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
          <label htmlFor="my-modal-3" className="btn">
            Edit
          </label>

          {/* modal start */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{name}</h3>
              <form onSubmit={handleUpdateReview} className="py-4">
                <textarea
                  name="updateMessage"
                  className="textarea textarea-bordered w-full"
                  placeholder="Your review"
                ></textarea>
                <button type="submit" className="btn w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* modal end */}

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
