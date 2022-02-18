import React from "react";
import Heading from "./Heading";
import img1 from "../assets/images/logo-chrome.svg";
import img2 from "../assets/images/logo-firefox.svg";
import img3 from "../assets/images/logo-opera.svg";
import img4 from "../assets/images/bg-dots.svg";

const Download = () => {

  return (
    <section className="download">
      <Heading
        title="Download the extension"
        text="We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize."
      />
      <div className="box-container">
        <div className="box box-1">
          <img src={img1} alt="Add to Chrome" />
          <h3>Add to Chrome</h3>
          <p>Minimum version: 55</p>
          <img className="dot" src={img4} alt="" />
          <div className="btn">Add & Install Extension</div>
        </div>
        <div className="box box-2">
          <img src={img2} alt="Add to firefox" />
          <h3>Add to Firefox</h3>
          <p>Minimum version: 62</p>
          <img className="dot" src={img4} alt="" />
          <div className="btn">Add & Install Extension</div>
        </div>
        <div className="box box-3">
          <img src={img3} alt="Add to opra" />
          <h3>Add to Opra</h3>
          <p>Minimum version: 46</p>
          <img className="dot" src={img4} alt="" />
          <div className="btn">Add & Install Extension</div>
        </div>
      </div>
    </section>
  );
};

export default Download;
