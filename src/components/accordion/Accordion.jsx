import React, { useState } from "react";

const Accordion = ({ question, ans }) => {
  const [active, setActive] = useState(false);
  return (
    <article className="box">
      <div className="ques">
        <h4>{question}</h4>
        <button onClick={() => setActive(!active)}>
          {active ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-up"></i>
          )}
        </button>
      </div>
      {active && <p>{ans}</p>}
    </article>
  );
};

export default Accordion;
