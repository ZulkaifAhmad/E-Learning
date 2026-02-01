import { useNavigate, useParams } from "react-router-dom";
import { marketingArticles } from "./Articles";
import "./Blog.css";
import { Star } from "lucide-react";
import { assets } from "../assets/assets";

function Courses_detail() {
  const { id } = useParams();
  const Navigate = useNavigate();
  const get_article = marketingArticles.filter((item) => item.slug === id);
  return (
    <div className="courses-details">
      {get_article.map((item) => (
        <div className="details-head relative z-0" key={item.slug}>
          <div className="path flex items-center z-20 justify-start gap-1.5 absolute top-5 left-18">
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
            <h1 className="text-4xl text-center font-bold w-2/3">
              {item.title}
            </h1>
            <p className="text-xl text-center w-2/3">{item.content}</p>
          </div>
        </div>
      ))}
      <div className="courses-details-hero-section flex items-start justify-start min-h-100">
        <div className="hero-section-left w-3/5">
          <p
            id="overview-details-p"
            className="text-base bg-green-500 w-fit rounded-md text-white"
          >
            Overview
          </p>

          <div className="rapper-overviews rounded-md">
          <div className="details-overviews flex items-center gap-10 ">
            <div className="bg-white rounded-md w-2/5 p-2 pl-5 pr-5 flex flex-col gap-2 items-center">
              <p className="font-bold text-base">4 out of 5</p>
              <div className="flex items-start justify-start gap-1">
                <Star size={20} fill="green" color="green" />
                <Star size={20} fill="green" color="green" />
                <Star size={20} fill="green" color="green" />
                <Star size={20} fill="green" color="green" />
                <Star size={20} fill="green" color="green" />
              </div>
              <p className="text-sm text-gray-500">Top Raiting</p>
            </div>
            <div>
              <div className="template-line flex gap-2 items-center justify-start">
                <p className="text-sm font-semibold text-green-900">
                  5 Stars
                </p>
                <div className="line h-1 w-60 bg-green-300">
                  <div className="filled-line w-3/3 h-full bg-green-500">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="template-line flex gap-2 items-center justify-start">
                <p className="text-sm font-semibold text-green-900">
                  4 Stars
                </p>
                <div className="line h-1 w-60 bg-green-300">
                  <div className="filled-line w-4/5 h-full bg-green-500">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="template-line flex gap-2 items-center justify-start">
                <p className="text-sm font-semibold text-green-900">
                  3 Stars
                </p>
                <div className="line h-1 w-60 bg-green-300">
                  <div className="filled-line w-3/5 h-full bg-green-500">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="template-line flex gap-2 items-center justify-start">
                <p className="text-sm font-semibold text-green-900">
                  2 Stars
                </p>
                <div className="line h-1 w-60 bg-green-300">
                  <div className="filled-line w-2/5 h-full bg-green-500">
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl p-4">
            <div className="flex items-center gap-3">
              <img
                src={`${assets.Girl_Standing}`}
                alt="User Profile"
                className="w-10 h-10 border border-gray-300 rounded-full object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start flex-col gap-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Lina</h4>

                  <div className="flex gap-0.5 text-orange-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>

              <span className="text-xs text-gray-500">3 month</span>
            </div>

            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
          </div>
          <hr className="text-gray-400 w-9/10 m-auto"/>
          <div className="w-full rounded-xl p-4">
            <div className="flex items-center gap-3">
              <img
                src={`${assets.Girl_Standing}`}
                alt="User Profile"
                className="w-10 h-10 border border-gray-300 rounded-full object-cover"
              />

              <div className="flex-1">
                <div className="flex items-start flex-col gap-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Lina</h4>

                  <div className="flex gap-0.5 text-orange-500">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>

              <span className="text-xs text-gray-500">3 month</span>
            </div>

            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
          </div>
          </div>

        </div>
        <div className="hero-section-right w-1/3 bg-amber-600">
          <p>right</p>
        </div>
      </div>
    </div>
  );
}

export default Courses_detail;
