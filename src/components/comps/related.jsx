import React from "react";
import { assets } from "../../assets/assets";
import Circle from "./circle";

function Related() {
  return (
    <div className="Related flex items-center justify-evenly relative overflow-hidden">
      <div className="related-text-part w-1/2">
        <h2 className="text-3xl">
          <span id="heading-span">Tools</span> For Teachers
        </h2>
        <h2 className="text-3xl">And Learners</h2>
        <p>
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>

      <div className="related-image-part w-1/2 flex justify-center items-center z-10 relative">
        <div className="related-dots">
          {Array.from({ length: 70 }).map((_, index) => (
            <span key={index} className="dot"></span>
          ))}
        </div>
          <div className="absolute bottom-30 z-0 left-10">
            <Circle bg="bg-yellow-200" w="30px" />
          </div>
          <div className="absolute top-10 z-0 right-40">
            <Circle bg="bg-green-300" w="30px" />
          </div>
          <div className="absolute top-10 z-0 left-45">
            <Circle bg="bg-blue-300" w="200px" />
          </div>
        <img id="related_image" src={assets.Girl_Standing} alt="girl_picture" />
      </div>
    </div>
  );
}

export default Related;
