// Flyer.js
import React from "react";

const Flyer = ({ content }) => {
  return (
    <div>
      <ul>
        {Array.isArray(content)
          ? content.map((item, index) => <li key={index}>{item}</li>)
          : null}
      </ul>
    </div>
  );
};

export default Flyer;
