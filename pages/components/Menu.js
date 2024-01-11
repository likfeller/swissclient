import React from "react";

const Menu = ({ content }) => {
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

export default Menu;
