import { Calendar, Newspaper, UsersRound } from "lucide-react";
import "../../App.css";
import { assets } from "../../assets/assets";
import Button from "./button";

function Tools() {
  return (
    <div className="Tools">
      <h1 className="text-4xl text-center">All-In-One Cloud Software.</h1>

      <div className="raperP flex justify-center items-center">
        <p className="text-center w-1/2 mt-4 text-base">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>

      <div className="cards flex justify-center gap-5 items-center">
        <div className="tools-card">
          <span>
            <Newspaper size={20} color="white" />
          </span>
          <strong className="text-center text-lg">
            Online Billing, Invoicing, & Contracts
          </strong>
          <p className="text-center text-base">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>

        <div className="tools-card">
          <span>
            <Calendar size={20} color="white" />
          </span>
          <strong className="text-center text-lg">
            Easy Scheduling & Attendance Tracking
          </strong>
          <p className="text-center text-base">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance
          </p>
        </div>

        <div className="tools-card">
          <span>
            <UsersRound size={20} color="white" />
          </span>
          <strong className="text-center text-lg">Customer Tracking</strong>
          <p className="text-center text-base">
            Automate and track emails to individuals or groups. Skilline’s
            built-in system helps organize your organization{" "}
          </p>
        </div>
      </div>

      <div className="what">
        <h1 className="text-center text-4xl">What is TOTC?</h1>
        <div className="P-div w-full flex justify-center items-center">
          <p className="w-2/3 text-base text-center">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="what-rapper flex justify-center items-center gap-10">
        <div className="what_card">
          <img src={assets.Girl_Standing} alt="girl_standing_picture" />
          <div className="textPart">
            <h2 className="font-bold text-xl text-white">FOR INSTRUCTORS</h2>
            <button>Start a class Today</button>
          </div>
        </div>

        <div className="what_card">
          <img src={assets.Girl_books} alt="girl_standing_picture" />
          <div className="textPart">
            <h2 className="font-bold text-xl text-white">FOR STUDENTS</h2>
            <button>Enter access code</button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Tools;
