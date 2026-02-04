import React from "react";
import "../../App.css";
import { assets } from "../../assets/assets";
import Circle from "../comps/circle.jsx"; // Double check your import path
import { Star } from "lucide-react";

function Managment() {
  return (
    // Changed: Added 'flex-col' for mobile and 'md:flex-row' for laptop
    <div className="Managment flex flex-col md:flex-row min-h-100 items-center justify-between">
      
      {/* Changed: w-full for mobile, md:w-1/2 for laptop */}
      <div className="managment-text-part w-full md:w-1/2">
        <h2 id="first-man-heading" className="text-3xl font-bold">
          Class Management
        </h2>
        <h2 className="text-3xl font-bold">Tools for Educators</h2>
        <p className="text-base">
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>

      {/* Changed: w-full for mobile, md:w-1/2 for laptop. Added mt-10 for spacing on mobile */}
      <div className="managment-image-part relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        <div className="card">
          <div className="card-nav flex justify-center items-center text-white">
            <p>GradeBook</p>
          </div>

          <div className="grade-pic">
            <div className="line">12%</div>
            <img
              src={assets.Man}
              className="relative right-1"
              alt="man-image"
            />
          </div>
          <div className="grade-pic grade-pic-two">
            <img
              src={assets.Man2}
              className="relative left-1"
              alt="man-image"
            />
            <div className="line">50%</div>
          </div>
          <div className="grade-pic grade-pic-four absolute top-10">
            <img
              src={assets.Man2}
              className="relative left-2"
              alt="man-image"
            />
            <div className="line">45%</div>
          </div>
          <div className="grade-pic grade-pic-three">
            <div className="line">30%</div>
            <img
              src={assets.black_suite_girl}
              className="relative right-1"
              alt="man-image"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="managment-circle absolute bottom-5 left-5">
          <Circle bg={"bg-red-300"} w={100} />
        </div>
        <div className="managment-circle absolute top-15 right-0">
          <Circle bg={"bg-green-300"} w={40} />
        </div>
        <div className="managment-circle absolute hidden md:block top-10 z-20 left-9">
          <Circle bg={"bg-blue-300"} w={60} />
          <Star color="green" size={25} className="relative bottom-11 left-4" />
        </div>
      </div>
    </div>
  );
}

export default Managment;