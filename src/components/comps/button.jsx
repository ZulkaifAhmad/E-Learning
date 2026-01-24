import React from "react";
import "../../App.css"

function Button({text}) {
  return (
    <button
      type="button"
      className="comp-button cursor-pointer bg-white rounded text-black active:text-amber-300"
    >
      {text}
    </button>
  );
}

export default Button;
