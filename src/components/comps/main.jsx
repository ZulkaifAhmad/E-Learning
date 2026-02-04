import "../../App.css";
import { assets } from "../../assets/assets.js";
import Button from "../comps/button.jsx";
import { Calendar, MessageCircle, Check } from "lucide-react";

function Main() {
  return (
    <div className="main flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-0 md:py-0">
      <div className="parts text-part w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
        <h1 className="text-4xl w-full  md:text-5xl font-bold text-slate-900">
          <span className="text-teal-500">Studing</span> Online is now
          much easier
        </h1>

        <p className="text-base md:text-base w-full md:w-3/4 tracking-wide mt-5 mb-8 text-gray-500 font-medium">
          TOTC is an interesting platform that will teach you in a more
          interactive way
        </p>
    
        <Button text="Join for free" />
      </div>

      <div className="parts picture-part w-full md:w-1/2 relative flex justify-center pb-10 md:pb-0">
        <img
          src={assets.Girl_Standing}
          alt="girl picture"
          // Mobile: Width fixed to 300px for consistency. Laptop: Full width.
          className="w-[300px] md:w-full max-w-full object-contain z-10"
        />

        <div className="notify notification absolute top-0 left-4 md:top-auto md:left-auto flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 z-20 md:border-none md:shadow-none md:bg-transparent md:backdrop-blur-none">
          <div className="icon bg-teal-500 md:bg-transparent p-2 md:p-0 rounded-lg">
            <Calendar size={22} color="white" />
          </div>
          <div id="div">
            <strong className="block text-slate-800 text-lg md:text-inherit">
              250k
            </strong>
            <p className="text-xs text-gray-500 md:text-inherit">
              Assisted Student
            </p>
          </div>
        </div>

        {/* 2. Email (Top Right) */}
        <div className="email notification absolute top-12 right-2 md:top-auto md:right-auto flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 z-20 md:border-none md:shadow-none md:bg-transparent md:backdrop-blur-none">
          <div className="icon bg-orange-400 md:bg-transparent p-2 md:p-0 rounded-lg">
            <MessageCircle size={22} color="white" />
          </div>
          <div id="div">
            <strong className="block text-slate-800 text-sm md:text-inherit">
              Congratulations
            </strong>
            <p className="text-xs text-gray-500 md:text-inherit">
              Admission completed
            </p>
          </div>
        </div>

        <div className="check notification absolute bottom-12 left-2 md:bottom-auto md:left-auto flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/50 z-20 md:border-none md:shadow-none md:bg-transparent md:backdrop-blur-none">
          <div className="icon bg-green-500 md:bg-transparent p-2 md:p-0 rounded-full">
            <Check size={22} color="white" />
          </div>
          <div id="div">
            <strong className="block text-slate-800 text-sm md:text-inherit">
              200K Endours
            </strong>
            <p className="text-xs text-gray-500 md:text-inherit">
              Verified Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
