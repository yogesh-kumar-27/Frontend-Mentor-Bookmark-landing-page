import React from "react";

const FeatureButton = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "text active" : "text"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default FeatureButton;
