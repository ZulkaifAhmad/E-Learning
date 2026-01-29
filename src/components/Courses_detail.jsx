import React from "react";
import { useParams } from "react-router-dom";
import { marketingArticles } from "./Articles";

function Courses_detail() {
  const { id } = useParams();

  const get_article = marketingArticles.filter(item => item.slug === id)
    console.log(get_article)
  return (
    <div className="courses-details">
      {get_article.map((item) => (
        <div className="details-head" key={item.slug}>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

export default Courses_detail;
