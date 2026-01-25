import { Send } from "lucide-react";
import Circle from "../comps/circle.jsx";
import { assets } from "../../assets/assets";

function Test() {
  return (
    <div className="Test relative">
      <div className="test-image-part ">
        <div className="test-card relative z-10">
          <p className="rounded-3xl relative top-2 test-card-P">Question 1</p>
          <h2 className="text-xl">
            True or False ? This play takes place in itali{" "}
          </h2>
          <img src={assets.building_view} alt="building-image" />

          <div className="test-send flex items-center relative top-5 left-20">
            <Send size={30} color="green" />
            <p className=" w-2/3">Your Answer was Send Successfully</p>
          </div>
        </div>

        <div className="absolute top-10 z-0 left-25">
          <Circle bg="bg-blue-300" w="100px" />
        </div>
        <div className="absolute top-5 z-0 left-55">
          <Circle bg="bg-green-300" w="40px" />
        </div>
        <div className="absolute bottom-25 z-0 left-25">
          <Circle bg="bg-red-300" w="20px" />
        </div>
        <div className="absolute bottom-36 z-0 left-120">
          <Circle bg="bg-yellow-200" w="20px" />
        </div>

      </div>

      <div className="test-text-part w-1/2">
        <div className="test-text">
          <h2 className="text-3xl">Assessments, Quizzes</h2>
          <h2 className="text-3xl text-green-600">Tests</h2>
          <p className="text-base">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test;
