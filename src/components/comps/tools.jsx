import { Calendar, Newspaper, UsersRound } from "lucide-react";
import "../../App.css";
import { assets } from "../../assets/assets";

function Tools() {
  return (
    <div className="Tools">
      <h1 className="text-3xl text-center">All-In-One Cloud Software.</h1>

      <div className="raperP flex justify-center items-center">
        <p className="text-center w-full px-5 md:w-1/2 md:px-0 mt-4 text-base tracking-wide">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>

      <div className="cards flex flex-wrap justify-center gap-10 md:gap-5 items-center">
        <div className="tools-card">
          <span>
            <Newspaper size={20} color="white" />
          </span>
          <strong className="text-center text-xl">
            Online Billing, Invoicing, & Contracts
          </strong>
          <p className="text-center text-base">
            Simple and secure control of your organization’s financial and legal
            transactions. Send customized invoices and contracts
          </p>
        </div>

        <div className="tools-card greens">
          <span>
            <Calendar size={20} color="white" />
          </span>
          <strong className="text-center text-xl">
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
          <strong className="text-center text-xl">Customer Tracking</strong>
          <p className="text-center text-base">
            Automate and track emails to individuals or groups. Skilline’s
            built-in system helps organize your organization{" "}
          </p>
        </div>
      </div>

      <div className="what mt-20">
        <h1 className="text-center text-3xl">What is TOTC?</h1>
        <div className="P-div w-full flex justify-center items-center">
          <p className="w-full px-5 md:w-2/3 text-center tracking-wide mt-4 mb-10">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="what-rapper flex flex-wrap justify-center items-center gap-10">
          <div className="what_card relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={assets.Girl_Standing}
              alt="girl_standing_picture"
              className="w-full h-full object-cover"
            />
            <div className="textPart absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-center gap-4">
              <h2 className="font-bold text-xl text-white">FOR INSTRUCTORS</h2>
              <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-slate-800 transition">
                Start a class Today
              </button>
            </div>
          </div>

          <div className="what_card relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={assets.Girl_books}
              alt="girl_standing_picture"
              className="w-full h-full object-cover"
            />
            <div className="textPart absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-center gap-4">
              <h2 className="font-bold text-xl text-white">FOR STUDENTS</h2>
              <button className="px-6 py-3 bg-teal-500 text-white border-none rounded-full hover:bg-teal-600 transition">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
