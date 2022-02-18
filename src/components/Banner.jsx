import React from "react";
import img from '../assets/images/illustration-hero.svg'
const Banner = () => {
  return (
    <section className="banner">
      <div className="content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="box">
          <button className="btn">Get it on Chrome</button>
          <button className="btn btn2">Get it on Firefox</button>
        </div>
      </div>
      <div className="image">
          <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Banner;
