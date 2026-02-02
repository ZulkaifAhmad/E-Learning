import { Eye } from "lucide-react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div 
      onClick={()=> navigate(-1)}
      className="back absolute top-15 cursor-pointer text-gray-700 bg-gray-200 p-2 px-6 rounded-3xl left-45 flex gap-2 items-center">
        <ArrowLeft size={20} />
        <p className="text-base">Back</p>
      </div>
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">

        <div className="w-1/2 hidden md:block">
          <img
            src={assets.kid}
            alt="students"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h3 className="text-center text-lg font-semibold mb-6">
            Welcome to E-Learning
          </h3>

          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            <button
              onClick={() => navigate("/login")}
              className={`w-1/2 py-2 rounded-full text-sm ${
                isLogin ? "bg-teal-400 text-white" : ""
              }`}
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className={`w-1/2 py-2 rounded-full text-sm ${
                isSignup ? "bg-teal-400 text-white" : ""
              }`}
            >
              Signup
            </button>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full px-4 py-2 border rounded-full outline-none"
            />

            {isSignup && (
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-full outline-none"
              />
            )}

            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-full outline-none"
              />
              <Eye className="absolute right-4 top-3 w-4 text-gray-400" />
            </div>

            {isLogin && (
              <div className="flex justify-between text-sm">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" /> Remember me
                </label>
                <span className="text-teal-500 cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            )}

            <button className="w-full py-2 bg-teal-400 text-white rounded-full font-medium">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
