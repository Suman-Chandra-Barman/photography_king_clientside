import React from "react";
import img1 from "../../assets/gallery/images (1).jpg";
import img2 from "../../assets/gallery/images (2).jpg";
import img3 from "../../assets/gallery/images (3).jpg";
import img4 from "../../assets/gallery/images (4).jpg";
import img5 from "../../assets/gallery/images (5).jpg";
import img6 from "../../assets/gallery/images (6).jpg";
import img7 from "../../assets/gallery/images (7).jpg";
import img8 from "../../assets/gallery/images (8).jpg";
import img9 from "../../assets/gallery/images (9).jpg";
import img10 from "../../assets/gallery/images (10).jpg";
import img11 from "../../assets/gallery/images (11).jpg";
import img12 from "../../assets/gallery/images (12).jpg";

const PhotoGallery = () => {
  return (
    <div className="my-16 ">
      <h3 className="text-3xl font-bold text-center mb-10">Photo Gallery</h3>
      <div className="md:grid grid-cols-4 gap-5">
        <img src={img1} alt="" className="w-full" />
        <img src={img2} alt="" className="w-full" />
        <img src={img3} alt="" className="w-full" />
        <img src={img4} alt="" className="w-full" />
        <img src={img5} alt="" className="w-full" />
        <img src={img6} alt="" className="w-full" />
        <img src={img7} alt="" className="w-full" />
        <img src={img8} alt="" className="w-full" />
        <img src={img9} alt="" className="w-full" />
        <img src={img10} alt="" className="w-full" />
        <img src={img11} alt="" className="w-full" />
        <img src={img12} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default PhotoGallery;
