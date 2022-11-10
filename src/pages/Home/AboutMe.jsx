import React from "react";
import myImg from "../../assets/about-me/sumanFb.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="md:flex gap-10 justify-center items-center px-5 py-16 rounded-xl">
        <div className="w-1/3 mx-auto">
          <img className="mask mask-circle md:w-2/3" src={myImg} alt="" />
        </div>
        <div className="md:w-2/3 text-gray-700">
          <h3 className="text-4xl font-bold">
            Photography King: <br /> The Best Professional Photographer In
            Bangladesh
          </h3>
          <p className="text-xl my-5">
            Photography King a team of top photographers with a passion for
            photography and everything that comes with it. We are the leading
            and best photo studio in Dhaka to create art and crafts with
            photography.
          </p>
          <ul className="list-disc text-xl pl-4 font-semibold">
            <li>Professionally trained photographers.</li>
            <li>We have over 10 years of experience.</li>
            <li>We offer excellence being affordable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
