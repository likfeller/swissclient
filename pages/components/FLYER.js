import React from "react";

const Flyer = ({ content }) => {
  return (
    <div>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Flyer;
