import React from "react";
import "../../App.css";

function Button({ text }) {
  return (
    <button
      type="button"
      className="comp-button cursor-pointer m-auto md:m-0 bg-white rounded text-black active:text-blue-300 block"
    >
      {text}
    </button>
  );
}

export default Button;
