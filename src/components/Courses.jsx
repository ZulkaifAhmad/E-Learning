import "./Blog.css";
import { assets } from "../assets/assets.js";
import {
  Code,
  Briefcase,
  TrendingUp,
  PenTool,
  Database,
  Shield,
  Globe,
  BarChart,
} from "lucide-react";
import Articles from "./comps/Articles.jsx";
import Button from "./comps/button.jsx";

function Courses() {
  let lessons = [
    {
      lesson_image: assets.js,
      lesson_strong: "AWS Certified Solutions Architect",
      lesson_user_image: assets.Girl_Standing,
      lesson_user_name: "Lisa",
    },
    {
      lesson_image: assets.php,
      lesson_strong: "PHP Certified Website Solutions",
      lesson_user_image: assets.Girl_books,
      lesson_user_name: "Ayisha",
    },
    {
      lesson_image: assets.react,
      lesson_strong: "React js Component based Architect",
      lesson_user_image: assets.Girl_watching,
      lesson_user_name: "Mahinoor",
    },
  ];

  let fav_courses = [
    {
      logo: <Code size={20} color={"blue"} />,
      title: "Development",
      description:
        "Learn to build fast and scalable web applications using modern tools.",
    },
    {
      logo: <Briefcase size={20} color={"blue"} />,
      title: "Business",
      description:
        "Understand business strategies, management skills, and startup fundamentals.",
    },
    {
      logo: <TrendingUp size={20} color={"blue"} />,
      title: "Marketing",
      description:
        "Master digital marketing techniques to grow brands and reach customers.",
    },
    {
      logo: <PenTool size={20} color={"blue"} />,
      title: "Design",
      description:
        "Create user-friendly designs with strong visual and user experience principles.",
    },
    {
      logo: <Database size={20} color={"blue"} />,
      title: "Database",
      description: "Learn how to store, manage, and secure data efficiently.",
    },
    {
      logo: <Shield size={20} color={"blue"} />,
      title: "Cyber Security",
      description:
        "Protect systems and networks from digital attacks and threats.",
    },
    {
      logo: <Globe size={20} color={"blue"} />,
      title: "Web Technology",
      description:
        "Explore modern web technologies and internet-based solutions.",
    },
    {
      logo: <BarChart size={20} color={"blue"} />,
      title: "Data Analysis",
      description:
        "Analyze data to make better decisions and discover useful insights.",
    },
  ];

  return (
    <div className="Courses">
      <div className="courses-head">
        <h2 className="text-xl font-extrabold">
          Welcome back, ready for your next lesson?
        </h2>
        <div className="lessons flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="lesson cursor-pointer flex flex-col gap-2 w-full md:w-96 overflow-hidden bg-amber-200"
            >
              <img
                src={lesson.lesson_image}
                alt="js-picture"
                className="w-full h-50 rounded object-cover object-center"
              />
              <strong className="text-base">{lesson.lesson_strong}</strong>
              <div className="user-image flex items-center gap-1.5">
                <img
                  src={lesson.lesson_user_image}
                  alt="user-image"
                  className="h-8 w-8 rounded-full object-cover object-top bg-gray-400"
                />
                <p className="text-sm text-gray-800">
                  {lesson.lesson_user_name}
                </p>
              </div>
              <div className="line w-full h-1 bg-teal-100">
                <p className="coverd-line w-60 h-full block">&nbsp;</p>
              </div>

              <p className="text-end text-xs text-gray-500">Lesson 5 of 7</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fav-courses">
        <h2 className="text-xl font-bold">
          Choice favourite course from top category
        </h2>
        <div className="raper-fav-courses flex items-start justify-evenly gap-8 flex-wrap">
          {fav_courses.map((item, index) => (
            <div
              key={index}
              className="fav-course min-h-50 flex justify-start items-center flex-col gap-2"
            >
              <span>{item.logo}</span>
              <strong>{item.title}</strong>
              <p className="text-center text-gray-500 text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="Recommended">
        <h1 className="recommended-heading text-xl font-bold">
          Recommended for you
        </h1>
        <div className="recommended-courses flex flex-col md:flex-row gap-5">
          <Articles enable={true} />
        </div>
      </div>

      <div className="Recommended get-choise">
        <h1 className="recommended-heading text-xl font-bold">
          Get choice of your course
        </h1>
        <div className="recommended-courses flex flex-col md:flex-row gap-5">
          <Articles enable={true} />
        </div>
      </div>

      <div className="learning-rapper">
        <div className="start-learning flex justify-start items-center flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">
            Online coaching lessons for remote learning.
          </h1>
          <p className="w-full md:w-2/3 text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <div className="courses-btn flex justify-center items-center">
            <Button text={"Start Learning now"} />
          </div>
        </div>
      </div>

      <div className="Recommended">
        <h1 className="recommended-heading text-xl font-bold">
          Recommended for you
        </h1>
        <div className="recommended-courses flex flex-col md:flex-row gap-5">
          <Articles enable={true} />
        </div>
      </div>

      <div className="Recommended get-choise">
        <h1 className="recommended-heading text-xl font-bold">
          Get Student are viewing
        </h1>
        <div className="recommended-courses flex flex-col md:flex-row gap-5">
          <Articles enable={true} />
        </div>
      </div>
    </div>
  );
}

export default Courses;
