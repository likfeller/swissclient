import React from "react";
import { z_props } from "../index";

const Zeitung = () => {
  return (
    <div>
      <ul>
        {z_props &&
          z_props.map((item, index) => (
            <li key={index}>
              <p>{item.text}</p>
              {item.image}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Zeitung;
