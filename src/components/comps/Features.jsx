import { Copy, Users, WindIcon } from "lucide-react";
import "../../App.css";
import { assets } from "../../assets/assets.js";
import Circle from "./circle.jsx";

const Features = () => {
  return (
    <section className="features-section relative hidden md:block">
      <div className="features-header">
        <h2 className="section-title">
          Our <span className="text-teal">Features</span>
        </h2>
        <p className="section-subtitle">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      <div className="absolute top-45 left-10">
        <Circle bg="bg-blue-300" w="100px" />
      </div>
      <div className="absolute top-40 left-36">
        <Circle bg="bg-green-300" w="30px" />
      </div>
      <div className="absolute bottom-15 left-100">
        <Circle bg="bg-green-300" w="100px" />
      </div>
      <div className="absolute bottom-10 left-90">
        <Circle bg="bg-red-300" w="40px" />
      </div>

      <div className="rape-features flex justify-between items-center ">
        <div className="left w-2/3 h-102 rounded-2xl relative overflow-hidden">
          <div className="window rounded-2xl">
            <div className="window-nav">
              <div className="dot bg-red-400"></div>
              <div className="dot bg-amber-400"></div>
              <div className="dot bg-green-400"></div>
            </div>
            <div className="raper-window flex">
              <div className="window-left w-1/2">
                <div className="window-image flex justify-center items-center">
                  <img
                    src={assets.Women_smiling}
                    alt="img"
                    className="w-2/3 object-cover rounded-2xl"
                  />
                </div>
                <div className="window-buttons flex items-center justify-center gap-2">
                  <button className="btn-one cursor-pointer  rounded-2xl ">
                    Present
                  </button>
                  <button className="btn-two cursor-pointer rounded-2xl">
                    Call
                  </button>
                </div>
              </div>

              <div className="window-right w-2/3 flex hide-on-mobile">
                <div className="rape-two-images alone-images w-1/2 flex flex-col gap-3">
                  <img
                    src={assets.Man}
                    alt="man-picture"
                    className="window-right-images "
                  />
                  <img
                    src={assets.Man2}
                    alt="man-picture"
                    className="window-right-images "
                  />
                </div>

                <div className="rape-two-images-partTwo">
                  <img
                    src={assets.Girl_books}
                    className="absolute top-8 right-35 w-60 rounded-2xl object-cover"
                    id="another-image-window-two"
                    alt=""
                  />
                  <img
                    src={assets.black_suite_girl}
                    className="absolute right-20 bottom-0 w-60 rounded-2xl object-cover"
                    id="another-image-window"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-right-two w-1/3 h-102">
          <h1 className="text-2xl">
            A <span>user interface</span> designed for the classroom
          </h1>
          <div className="boxes flex justify-start items-center gap-6">
            <span className="rounded-4xl bg-gray-300">
              <WindIcon size={20} color="black" />
            </span>
            <p>
              Teachers do not get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>
          <div className="boxes flex justify-start items-center gap-6">
            <span className="rounded-4xl bg-emerald-300">
              <Copy size={20} color="white" />
            </span>
            <p>TA is and presenters can be moved to the front of the class.</p>
          </div>
          <div className="boxes flex justify-start items-center gap-6">
            <span className="rounded-4xl bg-amber-300">
              <Users size={20} color="blue" />
            </span>
            <p>
              Teachers can easily see all students and class data at one time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
