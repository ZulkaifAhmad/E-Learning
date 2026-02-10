import { useNavigate, useParams } from "react-router-dom";
import { marketingArticles } from "./Articles";
import "./Blog.css";
import {
  Star,
  BadgeCheck,
  Smartphone,
  Award,
  Layers,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { assets } from "../assets/assets";
import Articles from "./comps/Articles";
import Sections from "./comps/Sections";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice.js";

function Courses_detail() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const get_article = marketingArticles.filter((item) => item.slug === id);
  const dispatch = useDispatch();

  return (
    <div className="courses-details relative">
      {get_article.map((item) => (
        <div className="details-head relative z-0" key={item.slug}>
          <div className="path flex items-center z-20 justify-start gap-1.5 absolute top-5 left-5 md:left-18">
            <p
              onClick={() => Navigate(-1)}
              className="text-gray-300 cursor-pointer hover:underline"
            >
              Courses
            </p>
            <span className="text-gray-300">/</span>
            <p className="text-gray-300 cursor-context-menu">{item.category}</p>
          </div>
          <img src={item.img} alt={item.title} />
          <div className="rapper-details-head flex justify-center items-center flex-col gap-2 absolute z-10 w-full h-full top-0">
            <h1 className="text-2xl md:text-4xl text-center font-bold w-11/12 md:w-2/3">
              {item.title}
            </h1>
            <p className="text-base md:text-xl text-center w-11/12 md:w-2/3">
              {item.content}
            </p>
          </div>
        </div>
      ))}

      <div className="courses-details-hero-section pb-10 md:pb-25 flex flex-col md:flex-row gap-2 items-start relative px-5 md:px-20">
        <div className="hero-section-left  w-2/3 md:w-3/5 ">
          <p className="text-sm bg-green-500 px-3 py-1 rounded-md text-white w-fit mb-4">
            Overview
          </p>

          <div className="bg-gray-50 rounded-xl p-4 md:p-6 space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-5 md:gap-10">
              <div className="bg-white rounded-xl w-full md:w-2/5 p-4 flex flex-col gap-2 items-center shadow-sm">
                <p className="font-bold text-lg">4 out of 5</p>

                <div className="flex gap-1">
                  <Star size={18} fill="green" color="green" />
                  <Star size={18} fill="green" color="green" />
                  <Star size={18} fill="green" color="green" />
                  <Star size={18} fill="green" color="green" />
                  <Star size={18} fill="green" color="green" />
                </div>

                <p className="text-sm text-gray-500">Top Rating</p>
              </div>

              <div className="space-y-2 w-full">
                {[
                  { label: "5 Stars", width: "w-full" },
                  { label: "4 Stars", width: "w-4/5" },
                  { label: "3 Stars", width: "w-3/5" },
                  { label: "2 Stars", width: "w-2/5" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-green-900 w-16">
                      {item.label}
                    </p>
                    <div className="h-1 flex-1 md:w-60 bg-green-200 rounded-full">
                      <div
                        className={`${item.width} h-full bg-green-500 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {[1, 2].map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={assets.Man2}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Azhar</h4>
                    <div className="flex gap-0.5 text-orange-500">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                  </div>

                  <span className="text-xs text-gray-400">3 months</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Nisi ipsa voluptatum
                  reiciendis cum labore ex aliquid enim hic, culpa dolore....
                </p>

                {index === 0 && <hr className="border-gray-200" />}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-section-right w-full md:w-2/5 relative z-20 mt-10 md:-mt-24 self-start">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
            {get_article.map((item, index) => (
              <React.Fragment key={index}>
                <img
                  src={`${item.img}`}
                  alt="course"
                  className="w-full h-44 object-cover rounded-xl"
                />

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{item.price}</span>

                    <span className="text-sm text-gray-400 line-through">
                      $999.99
                    </span>
                    <span className="text-sm text-green-600 font-semibold">
                      50% Off
                    </span>
                  </div>

                  <p className="text-xs text-blue-500">
                    11 hours left at this price
                  </p>

                  <button 
                  onClick={()=> dispatch(add({slug : item.slug , count : 1}))}
                  className="w-full text-sm mt-3 bg-teal-500 hover:bg-teal-600 transition text-white font-medium py-1.5 cursor-pointer rounded-lg">
                    Buy Now
                  </button>
                </div>
              </React.Fragment>
            ))}

            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3">
                This Course Included
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-teal-500" />
                  Money Back Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-teal-500" />
                  Access on all devices
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-500" />
                  Certification of completion
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-500" />
                  32 Modules
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t pt-4">
              <h4 className="text-sm font-semibold">
                Training 5 or more people
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Class launched less than a year ago by Blackboard co-founder
                Michael Chasen.
              </p>
            </div>

            <div className="mt-6 border-t pt-4">
              <h4 className="text-sm font-semibold mb-3">Share this course</h4>

              <div className="flex gap-3">
                <Facebook className="cursor-pointer" color="blue" />
                <Twitter className="cursor-pointer" color="black" />
                <Linkedin className="cursor-pointer" color="blue" />
                <Youtube className="cursor-pointer" color="red" />
                <Share2 className="cursor-pointer" color="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marketing-articles flex flex-col pt-0 pb-7 px-5 md:px-20 gap-3">
        <strong className="text-xl">Marketing Articles</strong>
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-3">
          <Articles />
        </div>
      </div>

      <div className="courses-details-sections mt-10 md:mt-20 mb-20">
        <Sections />
      </div>
    </div>
  );
}

export default Courses_detail;
