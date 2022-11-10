import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCart";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  const [update, setUpdate] = useState(0);
  useTitle("My Review");

  useEffect(() => {
    fetch(
      `https://photography-king-server.vercel.app/my-review?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "photography_king_jwt"
          )}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReview(data.data);
      })
      .catch((error) => console.log(error));
  }, [user?.email, update]);

  const handleReviewDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete this review ?");
    if (proceed) {
      fetch(`https://photography-king-server.vercel.app/my-review/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Deleted successful", { duration: 3000 });
            const remaining = myReview.filter((order) => order._id !== id);
            setMyReview(remaining);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {myReview?.length ? (
        <div>
          <h3 className="text-center text-3xl font-bold mb-10">
            My Review : {myReview?.length}
          </h3>
          <div className="grid grid-cols-2 gap-10">
            {myReview?.map((review) => (
              <MyReviewCard
                key={review._id}
                review={review}
                setUpdate={setUpdate}
                handleReviewDelete={handleReviewDelete}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <h3 className="text-6xl font-bold">No reviews were added</h3>
        </div>
      )}
    </div>
  );
};

export default MyReview;
