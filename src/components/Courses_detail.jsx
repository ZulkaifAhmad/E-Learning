import React from "react";
import { useParams } from "react-router-dom";
import { marketingArticles } from "./Articles";
import "./Blog.css"

function Courses_detail() {
  const { id } = useParams();

  const get_article = marketingArticles.filter(item => item.slug === id)
    console.log(get_article)
  return (
    <div className="courses-details">
      {get_article.map((item) => (
        <div className="details-head relative z-0" key={item.slug}>
          <img src={item.img} alt={item.title} />
          <div className="rapper-details-head flex justify-center items-center flex-col gap-2 absolute z-10 w-full h-full top-0">
            <h1 className="text-4xl text-center font-bold w-2/3">{item.title}</h1>
            <p className="text-xl text-center w-2/3">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses_detail;
