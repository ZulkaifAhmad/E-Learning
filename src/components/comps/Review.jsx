import React from "react";
import { assets } from "../../assets/assets";
import Circle from "./circle";
import Button from "./button";

function Review() {
  return (
    <div className="Review relative w-full flex items-center">
      <div className="review-text-part flex flex-col items-start justify-start gap-4 w-1/2">
        <div className="rape-line flex justify-start gap-5 items-center">
          <span className="line w-10 bg-gray-300"></span>
          <p className="text-sm">TESTIMONIAL</p>
        </div>
        <h1 className="text-3xl">What They Say?</h1>
        <p className="review-P w-2/3 text-base">
          TOTC has got more than 100k positive ratings from our users around the
          world.{" "}
        </p>
        <p className="review-P w-2/3 text-base">
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p className="review-P w-2/3 text-base">
          Are you too? Please give your assessment
        </p>
        <Button text={"Write your assessment"} />
      </div>

      <div className="review-image-part flex relative items-center w-1/2">
        <img src={assets.Girl_books} alt="girl-image" />
        <div className="review-message-card flex flex-col absolute bottom-10 left-10">
          <div className="review-message flex items-center gap-3">
            <div className="review-line h-15 w-2 bg-gray-300"></div>
            <p className="text-sm italic">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>
          </div>
          <strong className="text-sm">Gloria rose</strong>
        </div>
        <div className="review-circle absolute top-30 right-50">
            <Circle bg={"bg-blue-300"} w={70}/>
        </div>
        <div className="review-circle absolute top-25 right-40">
            <Circle bg={"bg-green-300"} w={40}/>
        </div>
        <div className="review-circle absolute top-22 right-34">
            <Circle bg={"bg-green-300"} w={20}/>
        </div>
      </div>


    </div>
  );
}

export default Review;
