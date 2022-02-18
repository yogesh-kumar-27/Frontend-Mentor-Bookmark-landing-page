import React, { useState } from "react";
import Heading from "../Heading";
import Accordion from "./Accordion";
import { accordionData } from "./data";
const Faqs = () => {
  const [questions] = useState(accordionData);
  return (
    <section className="accordion">
      <Heading
        title="Frequently Asked Questions"
        text="Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us."
      />
      <div className="box-container">
        {questions.map((question) => (
          <Accordion key={question.id} {...question} />
        ))}
      </div>
      <button className="btn">More Info</button>

    </section>
  );
};

export default Faqs;
