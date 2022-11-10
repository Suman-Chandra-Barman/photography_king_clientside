import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;
    console.log(name, photoURL, price, description);
    const service = {
      name,
      image: photoURL,
      price,
      description,
    };
    fetch("https://photography-king-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Service add successfully");
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <h3 className="text-4xl font-bold text-gray-700">Add Service</h3>
        </div>
        <div className="w-full px-6 py-10 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleAddService}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Service Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block p-2 w-full mt-1 border-gray-300 rounded-md border border-1 shadow-sm"
                  placeholder="Enter service name"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Photo URL
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="photoURL"
                  className="block p-2 w-full mt-1 border-gray-300 rounded-md border border-1 shadow-sm"
                  placeholder="Enter photoURL"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Price
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="price"
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter price"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered h-[100px] text-base"
                  placeholder="Write Description"
                ></textarea>
              </div>
            </div>
            <div className=" text-red-400">{}</div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-700 focus:outline-none focus:bg-sky-500">
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
