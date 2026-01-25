import React from "react";

function Circle({ bg, w }) {
  return (
    <div
      className={`${bg} rounded-full`}
      style={{ width: w, height: w }}
    ></div>
  );
}

export default Circle;
