import Button from "./comps/button.jsx"
import "./Blog.css"
import { assets } from "../assets/assets.js"
import { Eye } from "lucide-react"

function Blog() {
  const blogCategories = [
    { img: assets.Watching_laptop, title: "UI/UX" },
    { img: assets.php, title: "PHP" },
    { img: assets.js, title: "Javascript" },
    { img: assets.react, title: "React js" }
  ]

  const relatedBlogs = [
    {
      img: assets.girl_looking,
      title: "How modern web frameworks are changing frontend development",
      authorImg: assets.Girl_Standing,
      author: "Ayesha",
      content:
        "Modern web frameworks such as React, Vue, and Angular help developers build fast and scalable user interfaces. They improve code reuse and reduce development time.",
      views: "18k"
    },
    {
      img: assets.js,
      title: "Why learning JavaScript deeply matters for every developer",
      authorImg: assets.Man2,
      author: "Ahmed",
      content:
        "JavaScript is the main language of the web. A strong understanding of concepts like promises, closures, and asynchronous programming leads to better and more reliable applications.",
      views: "26k"
    },
    {
      img: assets.video_call,
      title: "The future of online education and digital learning platforms",
      authorImg: assets.Girl_watching,
      author: "Sara",
      content:
        "Digital learning platforms are growing fast. Online classes, recorded lessons, and interactive tools are making education more flexible and accessible worldwide.",
      views: "31k"
    }
  ]

  return (
    <div id="Blog">
      <div className="blog-head flex justify-between items-center gap-5">
        <div className="blog-head-left flex flex-col gap-3 w-2/5">
          <p id="before-heading-blog" className="text-base">
            By Themadbrains in <span>inspiration</span>
          </p>
          <h1 className="text-3xl font-extrabold">
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button text="Start Learning now" />
        </div>
        <div className="blog-head-right w-1/2 flex justify-end">
          <img src={assets.laptop} alt="" />
        </div>
      </div>

      <div className="blog-list">
        <p id="blog-list-heading" className="text-base font-bold">
          Reading Blog list
        </p>
        <div className="blog-list-categories flex justify-between items-center">
          {blogCategories.map((item, index) => (
            <div
              key={index}
              className="list-one w-65 h-47 cursor-pointer rounded-2xl relative overflow-hidden"
            >
              <img src={item.img} alt="" />
              <p className="absolute bottom-2 left-20 z-10 text-sm">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="related-blog">
        <p className="font-bold text-base">Related Blog</p>
        <div className="related-blog-list flex justify-between items-start">
          {relatedBlogs.map((item, index) => (
            <div
              key={index}
              className="related-blog-list-categorie rounded-2xl flex flex-col gap-2"
            >
              <img id="related-img" src={item.img} alt="girlPicture" />
              <strong className="text-sm line-clamp-2">
                {item.title}
              </strong>
              <div className="rape-related-img flex gap-2 items-center">
                <img
                  src={item.authorImg}
                  alt="girl-standing-picture"
                  className="w-10 h-10 rounded-full object-cover object-top bg-gray-200"
                />
                <p className="text-sm font-medium">{item.author}</p>
              </div>
              <p id="related-content" className="line-clamp-3 text-sm">
                {item.content}
              </p>
              <div className="related-footer flex justify-between items-center">
                <p className="text-sm underline cursor-pointer">Read more</p>
                <span className="flex items-center gap-1">
                  <Eye size={20} color="gray" />
                  <p className="text-sm">{item.views}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
