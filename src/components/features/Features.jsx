import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import { simpleBookmarking, speedySearching, easySharing } from "./data";
import FeatureButton from "./FeatureButton";
const Features = () => {
  const [selected, setSelected] = useState("bookmarking");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "bookmarking",
      title: "Simple Bookmarking",
    },
    {
      id: "searching",
      title: "Speedy Searching",
    },
    {
      id: "sharing",
      title: "Easy Sharing",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "bookmarking":
        setData(simpleBookmarking);
        break;
      case "searching":
        setData(speedySearching);
        break;
      case "sharing":
        setData(easySharing);
        break;
      default:
        setData(simpleBookmarking);
    }
  }, [selected]);
  return (
    <section className="features">
      <Heading
        title="Features"
        text="Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go."
      />
      <div className="button">
        <ul>
          {list.map((item) => (
            <FeatureButton
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <hr />
      </div>
      {data?.map(({ image, title, para }) => (
        <div className="box-container" key={title}>
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <p>{para}</p>
            <button className="btn">More Info</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
