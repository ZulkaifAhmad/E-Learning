import { Send } from "lucide-react";
import Circle from "../comps/circle.jsx";
import { assets } from "../../assets/assets";
import "../../App.css"; // Assuming your CSS is imported here

function Test() {
  return (
    <div className="Test relative">
      {/* Changed: Added 'overflow-hidden' to prevent scrollbars on mobile from circles */}
      <div className="test-image-part overflow-hidden md:overflow-visible">
        
        {/* Card Section */}
        <div className="test-card relative z-10 mx-auto md:mx-0">
          <p className="rounded-3xl relative top-2 test-card-P">Question 1</p>
          <h2 className="text-xl">
            True or False ? This play takes place in itali{" "}
          </h2>
          <img src={assets.building_view} alt="building-image" />

          {/* Changed: 'left-0' for mobile, 'md:left-20' for laptop */}
          <div className="test-send flex items-center relative top-5 left-0 md:left-20">
            <Send size={30} color="green" />
            <p className="w-2/3 ml-2">Your Answer was Send Successfully</p>
          </div>
        </div>

        {/* Decorative Circles - Adjusted positioning for mobile safety */}
        <div className="absolute hidden md:block top-10 z-0 left-5 md:left-25">
          <Circle bg="bg-blue-300" w="100px" />
        </div>
        <div className="absolute hidden md:block top-5 z-0 left-40 md:left-55">
          <Circle bg="bg-green-300" w="40px" />
        </div>
        <div className="absolute hidden md:block bottom-25 z-0 left-10 md:left-25">
          <Circle bg="bg-red-300" w="20px" />
        </div>
        
        {/* Changed: Hidden on mobile because left-120 causes horizontal scroll, visible on md+ */}
        <div className="absolute bottom-36 z-0 hidden md:block md:left-120">
          <Circle bg="bg-yellow-200" w="20px" />
        </div>
      </div>

      {/* Changed: w-full for mobile, w-1/2 for laptop (md) */}
      <div className="test-text-part w-full md:w-1/2">
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