import React from "react";
import myImg from "../../assets/about-me/sumanFb.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center items-center">
        <div className="w-1/3">
          <img className="mask mask-circle w-2/3" src={myImg} alt="" />
        </div>
        <div className="w-2/3">
          <h3 className="text-3xl font-bold">Suman Chandra Barman</h3>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora iste quo aut repudiandae possimus quis dignissimos,
            voluptatibus neque earum minima laboriosam placeat corrupti rerum
            nam officia ullam, dicta cumque qui? Esse voluptatibus officia, amet
            sunt hic beatae recusandae odit aliquid soluta quod error quis autem
            reprehenderit modi perferendis, quae voluptates necessitatibus.
            Excepturi exercitationem recusandae repellat laboriosam quis culpa
            neque cumque expedita cupiditate repudiandae ipsa officiis, rerum
            laudantium quisquam at blanditiis dicta quia accusantium aperiam,
            explicabo inventore! Impedit laudantium nesciunt fugit enim
            exercitationem! Velit sapiente magnam inventore dolore praesentium!
            Provident cum mollitia commodi aspernatur, ab nisi id minus fugiat
            eum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
