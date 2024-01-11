import React from "react";

const Zeitung = ({ content }) => {
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

export default Zeitung;
