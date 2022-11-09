import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useTitle("Register");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Congratulation, Registration successful");
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
        updateUserProfileInfo(name, photoURL);
      })
      .catch((error) => console.log(error));
  };

  const updateUserProfileInfo = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <h3 className="text-4xl font-bold text-gray-700">
            Register Your Account
          </h3>
        </div>
        <div className="w-full px-6 py-10 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block p-2 w-full mt-1 border-gray-300 rounded-md border border-1 shadow-sm"
                  placeholder="Enter name"
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  autoComplete="true"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            <div className=" text-red-400">{error}</div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-700 focus:outline-none focus:bg-sky-500">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-sky-500 hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
